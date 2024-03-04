import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CombinedError, useQuery } from "urql";
import { GET_CONTACTS_QUERY } from "../graphql/queries/contacts";
import {
  saveContacts,
  showPopup,
} from "../redux/modules/contacts/contactSlice";
import { RootState } from "../redux/modules/rootReducer";

export type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  contactInfos: {
    infoType: "email" | "phone";
    value: string;
  }[];
};

export type ContactsResponse = {
  data: Contact[];
  error?: CombinedError;
  fetching: boolean;
  showAddPopup: boolean;
  handleShowPopup: (state: boolean) => void;
};

export const useContacts = () => {
  const dispatch = useDispatch();
  const [{ data, fetching, error }] = useQuery({ query: GET_CONTACTS_QUERY });

  const { showAddPopup } = useSelector(({ contact }: RootState) => contact);

  useEffect(() => {
    if (data?.contacts != undefined) {
      dispatch(saveContacts(data.contacts));
    }
  }, [data]);

  const handleShowPopup = (state: boolean) => {
    dispatch(showPopup(state));
  };

  return {
    contacts: data?.contacts ?? [],
    error,
    fetching,
    showAddPopup,
    handleShowPopup,
  };
};
