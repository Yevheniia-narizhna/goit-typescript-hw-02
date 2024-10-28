import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
// import { selectFilter } from "../filters/slice";
import { logout } from "../auth/operations";
import { selectContact } from "./selectors";
import { selectFilter } from "../filters/selectors";
// import { selectFilter } from "./filters/filtersSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  // initialState: {
  //   items: [],
  //   loading: false,
  //   error: null,
  // },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(logout.fulfilled, () => initialState)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        (state, action) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        (state, action) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

// export const selectContact = (state) => state.contacts.items;
export const contactReducer = contactsSlice.reducer;
// export const selectError = (state) => state.contacts.error;
// export const selectLoading = (state) => state.contacts.loading;

// export const selectFilteredContacts = createSelector(
//   [selectContact, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter((contact) =>
//       contact.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
//     );
//   }
// );
