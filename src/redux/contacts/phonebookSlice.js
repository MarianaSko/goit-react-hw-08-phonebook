import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { addContactsThunk, deleteContactsThunk, fetchContactsThunk } from "./operations"
import { logoutThunk } from "../auth/operations"

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
}

const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {
        setFilterAction: (state, { payload }) => {
            state.filter = payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
                state.contacts.items = payload
                state.contacts.isLoading = false
            })
            .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
                state.contacts.items = state.contacts.items.filter(item => item.id !== payload.id)
                state.contacts.isLoading = false
            })
            .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
                state.contacts.items.push(payload)
                state.contacts.isLoading = false
            })
            .addCase(logoutThunk.fulfilled, state => {
                state.contacts.items = []
            })
            .addMatcher(isAnyOf(fetchContactsThunk.rejected, deleteContactsThunk.rejected, addContactsThunk.rejected), (state, { payload }) => {
                state.contacts.isLoading = false
                state.contacts.error = payload
            })
            .addMatcher(isAnyOf(fetchContactsThunk.pending, deleteContactsThunk.pending, addContactsThunk.pending), (state, { payload }) => {
                state.contacts.isLoading = true
            })
    }
})

export const { setFilterAction } = phonebookSlice.actions
export const phonebookReducer = phonebookSlice.reducer