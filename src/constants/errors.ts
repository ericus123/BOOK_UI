export type UserFriendlyErrorMessages = {
  [key: string]: string;
};

export const userFriendlyErrorMessages: UserFriendlyErrorMessages = {
  USERNAME_TAKEN: "Username is taken, use a different one",
  INVALID_TOKEN: "Oops! Something went wrong. Please try logging in again.",
  SAME_PASSWORD: "Old password and new password can't be the same",
  INVALID_HEADERS: "Oops! Something went wrong. Please try again later.",
  INVALID_INPUT: "Invalid credentials",
  INVALID_CREDENTIALS: "Invalid credentials",
  UNVERIFIED_ACCOUNT:
    "Your account is not verified. Please verify your email to continue.",
  UNKNOWN_USER:
    "Invalid login credentials. Please check your email and password.",
  UNKNOWN_MEMBER: "Can't find that member in our system",
  ALREADY_REGISTERED:
    "Account already exists. Please use a different email to register.",
  PASS_DOESNT_MATCH:
    "Invalid login credentials. Please check your email and password.",
  SERVER_ERROR:
    "Oops! Something went wrong on our end. Please try again later.",
  INSUFFICIENT_ROLE:
    "You don't have the necessary permissions to perform this action.",
  INSUFFICIENT_PERMISSION: "You don't have permission to perform this action.",
  INVALID_ROLES_OR_PERMISSIONS:
    "Invalid roles or permissions. Please contact support.",
  ACCOUNT_SUSPENDED:
    "Your account has been suspended. Please contact support for assistance.",
  TOKEN_EXPIRED: "Your session has expired. Please log in again.",
  INVALID_TWO_FACTOR_CODE: "Invalid verification code. Please try again.",
  IP_BLOCKED:
    "Access denied due to suspicious activity. Please contact support.",
  SECURITY_QUESTION_FAILED:
    "Security question verification failed. Please try again.",
  UNEXPECTED_ERROR:
    "Oops! Something unexpected happened. Please try again later.",
  PASSWORD_REUSE_NOT_ALLOWED:
    "Please choose a different password. Password reuse is not allowed.",
  PASSWORD_RESET_EXPIRED:
    "Password reset link expired. Please request a new one.",
  UNAUTHORIZED_DEVICE: "Unauthorized device. Please verify your device.",
  INVALID_SECURITY_KEY: "Invalid security key. Please try again.",
  INVALID_ORIGIN: "Invalid request. Please try again.",
  LIMIT_EXCEEDED: "Too many requests. Please try again later.",
  SESSION_EXPIRED: "Your session has expired. Please log in again.",
  UNAUTHORIZED_REQUEST: "Unauthorized request. Please log in to continue.",
};
