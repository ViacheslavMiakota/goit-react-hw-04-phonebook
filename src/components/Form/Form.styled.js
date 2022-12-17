import styled from '@emotion/styled';

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  min-width: 350px;
  border: solid 2px;
  border-radius: 8px;
  padding: 8px;
`;
export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const FormInput = styled.input`
  min-width: 320px;
  padding: 8px;
`;
export const FormButton = styled.button`
  padding: 8px;
  background-color: #3f3fd8;
  color: #fff;
  border-color: blue;
  border-radius: 8px;
`;
