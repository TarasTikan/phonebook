import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectFilter = state => state.filter.filter;
export const selectError = state => state.contacts.contacts.erorr;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizedFiltr = filter.toLowerCase();
    return contacts.filter(contact => contact.name.includes(normalizedFiltr));
  }
);
