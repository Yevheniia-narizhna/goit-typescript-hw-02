import axios from "axios";
// import { fetchContacts, deleteContact, addContact } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../auth/operations";

// const BASE_URL = "https://670be5c87e5a228ec1cefa11.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "fetchData",
  async (_, thunkApi) => {
    try {
      const { data } = await authApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteCont",
  async (id, thunkApi) => {
    try {
      const { data } = await authApi.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "addCont",
  async (contact, thunkApi) => {
    try {
      const { data } = await authApi.post("/contacts", contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const fetchContactss = () => async (dispatch) => {
//   const { data } = await axios.get(BASE_URL);
//   dispatch(fetchContacts(data));
// };

// export const deleteContacts = (id) => async (dispatch) => {
//   const { data } = await axios.delete(`${BASE_URL}/${id}`);
//   dispatch(deleteContact(data.id));
// };

// export const addContacts = (contact) => async (dispatch) => {
//   const { data } = await axios.post(BASE_URL, contact);
//   dispatch(addContact(data));
// };
