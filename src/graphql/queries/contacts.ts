import { gql } from "urql";

export const GET_CONTACTS_QUERY = gql`
  query GetContacts {
    contacts {
      id
      firstName
      lastName
      contactInfos {
        id
        infoType
        value
      }
    }
  }
`;
