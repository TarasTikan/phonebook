import React, { useState } from 'react';
import { Form } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onFormSubmitContacts = event => {
    event.preventDefault();
    const chekName = contacts.find(item => item.name.toLowerCase() === name.toLowerCase());
    if (chekName === undefined || chekName === null) {
      dispatch(addContacts({ number, name }));
      setName('');
      setNumber('');
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  return (
    <Form onSubmit={onFormSubmitContacts}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <TextField
          helperText="Please enter your name"
          label="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <TextField
          helperText="Please enter your number"
          label="Number"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Box>
      <Button type="submit" variant="contained" color="success">
        Add Contact
      </Button>
    </Form>
  );
}
