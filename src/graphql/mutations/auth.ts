import { gql } from "urql";

export const SIGNIN_MUTATION = gql`
  mutation Signin($email: String!, $password: String!) {
    Signin(input: { email: $email, password: $password }) {
      accessToken
      refreshToken
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SignupUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    SignupUser(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      accessToken
      refreshToken
    }
  }
`;

export const SIGNOUT_MUTATION = gql`
  mutation SignoutUser() {
    SignoutUser
  }
`;
