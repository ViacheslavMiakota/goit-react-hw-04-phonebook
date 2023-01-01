import React from 'react';
import PropTypes from 'prop-types';
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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
