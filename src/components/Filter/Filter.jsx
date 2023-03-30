import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChangeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <TextField
        helperText="Find contacts by name"
        label="Filter"
        type="text"
        name="name"
        value={filter}
        onChange={onChangeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Box>
  );
};
