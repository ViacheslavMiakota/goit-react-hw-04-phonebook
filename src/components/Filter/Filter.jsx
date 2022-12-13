import React from 'react';
import { FormLabel, FormInput } from 'components/Form/Form.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FormLabel htmlFor="">
      Find contacts by name
      <FormInput type="text" value={value} onChange={onChange} />
    </FormLabel>
  );
};

export default Filter;
