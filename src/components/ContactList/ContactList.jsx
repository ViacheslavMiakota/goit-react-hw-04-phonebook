import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from 'components/ContactList/ContactList.styled';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        );
      })}
    </List>
  );
};

export default ContactList;
