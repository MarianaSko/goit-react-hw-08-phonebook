import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "configAxios/api";

export const fetchContactsThunk = createAsyncThunk('fetchContacts', async (_, thunkApi) => {
    try {
        const { data } = await api.get('/contacts')
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const deleteContactsThunk = createAsyncThunk('deleteContacts', async (id, thunkApi) => {
    try {
        const { data } = await api.delete(`/contacts/${id}`)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addContactsThunk = createAsyncThunk('addContacts', async (contact, thunkApi) => {
    try {
        const { data } = await api.post('/contacts', contact)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})