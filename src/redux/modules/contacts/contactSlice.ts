import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "../../../hooks/useContacts";

export interface ContactsSliceState {
  contacts: Contact[];
  showAddPopup: boolean;
}

const initialState: ContactsSliceState = {
  contacts: [],
  showAddPopup: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    saveContacts(state, { payload }: { payload: Contact[] }) {
      state.contacts = payload;
    },
    showPopup(
      state,
      {
        payload,
      }: {
        payload: boolean;
      }
    ) {
      state.showAddPopup = payload;
    },
  },
});

export const { saveContacts, showPopup } = contactsSlice.actions;

export default contactsSlice.reducer;
