"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as URQLProvider } from "urql";
import { createUrqlClient } from "../graphql/useClient";
import { persistor, store } from "./storeConfig";

export function Providers({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  const client = createUrqlClient();
  return (
    <URQLProvider value={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children} </PersistGate>
      </Provider>
    </URQLProvider>
  );
}
