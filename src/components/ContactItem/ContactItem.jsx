import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'components/ContactItem/ContactItem.styled';
import { FormButton } from 'components/Form/Form.styled';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Item key={id}>
      <p>{name}:</p>
      <p>{number}</p>
      <FormButton onClick={() => onDelete(id)}>DELETE</FormButton>
    </Item>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
