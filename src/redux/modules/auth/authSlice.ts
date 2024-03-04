import { createSlice } from "@reduxjs/toolkit";
import { ProfileInput } from "../../../graphql/types";
import { SigninResponse } from "../../../hooks/useAuth";

export type AuthTokens = {
  accessToken?: string;
  refreshToken?: string;
};

export type ProfileType = ProfileInput & {
  email: string;
  isVerified: boolean;
  role: {
    roleName: string;
  };
  permissions: {
    permissionName: string;
  };
};
export interface AuthSliceState {
  tokens: AuthTokens;
  profile?: ProfileType;
}

const initialState: AuthSliceState = {
  tokens: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleAuthTokens(
      state,
      {
        payload,
      }: {
        payload: SigninResponse;
      }
    ) {
      state.tokens = payload;
    },
    handleSignoutData(state) {
      state.tokens = {};
    },
    saveProfile(state, { payload }: { payload: ProfileType }) {
      state.profile = payload;
    },
  },
});

export const { handleAuthTokens, handleSignoutData, saveProfile } =
  authSlice.actions;

export default authSlice.reducer;
