import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 20px;
  margin-top: 10px;
  background: #0f0f0f;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 300px;
  color: #888;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  padding: 10px;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 10px;
  box-shadow: inset 0 2px 10px 1px rgba(0, 0, 0, 0.5),
    inset 0 0 0 60px rgba(0, 0, 0, 0.5), 0 1px rgba(40, 186, 104, 0.08);
  transition: 0.5s linear;
  &:focus,
  &:hover {
    color: #0f0f0f;
    outline: none;
    box-shadow: inset 0 1px 3px 1px rgba(0, 0, 0, 0.5),
      inset 0 0 0 60px rgba(0, 0, 0, 0), 0 1px rgba(133, 23, 23, 0.08);
  }
`;
