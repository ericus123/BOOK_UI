import { jwtDecode } from "jwt-decode";
import { CombinedError } from "urql";
import { RoleName } from "../components/navigation/navbar/AuthPopup";
import { userFriendlyErrorMessages } from "../constants/errors";

type GraphQLError = {
  extensions?: {
    code?: string;
  };
};

export type TokenData = {
  sub: string;
  email: string;
  isVerified: boolean;
  role?: RoleName;
  firstName: string;
  lastName: string;
  avatar?: string;
};

type LogInfo = {
  message: string;
  type: "warning" | "error" | "message";
  enabled?: boolean;
  event?: Event;
};

export const playerLog = ({
  message,
  type = "message",
  enabled = false,
  event,
}: LogInfo): void => {
  if (enabled) {
    switch (type) {
      case "warning":
        console.warn(`Warning: ${message}`, event);
        break;
      case "error":
        console.error(`Error: ${message}`, event);
        break;
      case "message":
        console.log(`Message: ${message}`, event);
        break;
      default:
        console.log(message);
    }
  }
};

const wsUrlRegex =
  /^wss?:\/\/((\w+:?\w*)?@)?([a-zA-Z\d.-]+)(:\d+)?(\/([^\s]*))?$/;
export const isValidWsUrl = (url: string): boolean => {
  return wsUrlRegex.test(url);
};

export const getGraphQLErrorMessage = (
  error: CombinedError | undefined
): string | undefined => {
  if (error && error.graphQLErrors && error.graphQLErrors.length > 0) {
    const errorCode: string =
      error.graphQLErrors[0]?.message?.split(":")?.length > 1
        ? error.graphQLErrors[0]?.message?.split(":")[1]?.trim()
        : error.graphQLErrors[0]?.message?.split(":")[0]?.trim();

    if (errorCode != undefined) {
      return userFriendlyErrorMessages[errorCode] || "Something went wrong";
    }

    return "Something went wrong";
  }
  return undefined;
};

export const extractInitials = (fullName: string) => {
  if (fullName == undefined || typeof fullName !== "string") {
    return "";
  }

  return fullName
    .split(/\s+/)
    .map((part) => part[0].toUpperCase())
    .join("");
};

export const verifyToken = (token?: string) => {
  try {
    if (token != undefined) {
      const isValid: {
        data: TokenData;
      } = jwtDecode(token);
      return isValid?.data;
    }
  } catch (error) {
    return null;
  }
};

export const capitaliseFirstChar = (str: string) => {
  return str
    .split("")[0]
    .toUpperCase()
    .concat(str.split("").slice(1, str.length).join(""));
};
