import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import  actions from './phonebook-actions'

const contacts = createReducer([], {
  [actions.addContact]: (state, {payload}) => [...state, payload],
  [actions.deleteContact]: (state, {payload}) => state.filter((contact) => contact.id !== payload)
});

const filter = createReducer('', {
  [actions.changeFilterç]: (state, {payload}) => payload
})

export default combineReducers({
  contacts,
  filter,
});
