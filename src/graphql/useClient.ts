import { devtoolsExchange } from "@urql/devtools";
import { createClient as createWSClient } from "graphql-ws";
import WebSocket from "isomorphic-ws";
import {
  cacheExchange,
  createClient,
  fetchExchange,
  subscriptionExchange
} from "urql";
import { store } from "../redux/storeConfig";

const createWebSocketClient = () => {
  const wsClient = createWSClient({
    url: `${process.env.NEXT_PUBLIC_GRAPHQL_WSS_ENDPOINT}`,
    webSocketImpl: WebSocket
  });
  return wsClient;
};

export const createUrqlClient = () => {
  const wsClient = createWebSocketClient();

  const clientOptions = {
    url: `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
    exchanges: [
      cacheExchange,
      devtoolsExchange,
      fetchExchange,
      subscriptionExchange({
        forwardSubscription: (operation: any) => ({
          subscribe: (sink) => ({
            unsubscribe: wsClient.subscribe(operation, sink)
          })
        })
      })
    ],
    fetchOptions: () => {
      const { auth } = store.getState();

      return {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth?.tokens?.accessToken}`,
          "x-refresh-token": auth?.tokens?.refreshToken
        },
        timeout: 5000
      };
    }
  };

  //@ts-ignore
  const client = createClient(clientOptions);
  return client;
};
