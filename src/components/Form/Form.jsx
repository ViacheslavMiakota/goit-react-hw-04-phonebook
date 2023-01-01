import { useState } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  FormBox,
  FormLabel,
  FormInput,
  FormButton,
} from 'components/Form/Form.styled';

const ContactForm = ({ onSubmit, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(contacts);
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.warning(`${name} is already in contacts`);
    } else {
      onSubmit({ name, number });
      reset();
    }
  };
  const handleChange = event => {
    const { name, value } = event.target;
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
  // const handleNameChange = event => {
  //   console.log(event.target.value);
  //   setName(event.target.value);
  // };
  // const handleNumberChange = event => {
  //   console.log(event.target.value);
  //   setNumber(event.target.value);
  // };

  return (
    <FormBox onSubmit={handleSubmit}>
      <FormLabel htmlFor="">
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel htmlFor="">
        Number
        <FormInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit" onSubmit={handleSubmit}>
        Add contact
      </FormButton>
    </FormBox>
  );
};
export default ContactForm;
