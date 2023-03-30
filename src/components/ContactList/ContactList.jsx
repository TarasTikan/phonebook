import React from 'react';
import { useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { ContactItem } from './ContactList.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';
export const ContactList = () => {
  const filter = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContactsItem = id => {
    dispatch(deleteContacts(id));
  };
  return (
    <ul>
      {filter.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <p>
            {name}: {number}
          </p>
          <Button
            type="button"
            variant="outlined"
            startIcon={<DeleteIcon />}
            color="error"
            onClick={() => onDeleteContactsItem(id)}
          >
            Delete
          </Button>
        </ContactItem>
      ))}
    </ul>
  );
};
