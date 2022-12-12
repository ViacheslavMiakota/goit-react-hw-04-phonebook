import React from 'react';
import { Item } from 'components/ContactItem/ContactItem.styled';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Item key={id}>
      <p>{name}:</p>
      <p>{number}</p>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        DELETE
      </button>
    </Item>
  );
};
export default ContactItem;
