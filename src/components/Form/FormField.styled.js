import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 30px 30px;
  margin: 0 auto;
  background-color: #cdeee3;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

export const FormTitle = styled.h1`
  font-weight: 800;
  color: #171d0d;
  text-align: center;
`;

export const FormInput = styled.input`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 300px;
  padding: 10px 10px;
  border-radius: 20px;
  border: 2px solid green;
  box-shadow: 4px 14px 30px -1px rgba(3, 76, 57, 0.51);
  outline: transparent;
`;

export const AddButton = styled.button`
  min-width: 120px;
  padding: 10px 10px;
  color: rgb(151 29 209 / 84%);
  background-color: #10e268;
  border-radius: 20px;
  border: transparent;
  outline: transparent;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
 
  &:hover {
    transform: scale(1.02);
    text-shadow: 1px 1px 2px whitesmoke;
  }
`;
