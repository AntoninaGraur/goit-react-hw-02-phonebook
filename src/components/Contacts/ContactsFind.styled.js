import styled from "styled-components";

export const ContactMenu = styled.ul`
  font-size: 18px;
  color: #223a22;
  text-shadow: 1px 1px 2px rgb(42 36 36 / 89%);
  list-style: number;
`;

export const DeleteBtn = styled.button`
  min-width: 90px;
  padding: 7px 7px;
  color: #151216d6;
  background-color: #10e2683d;
  border-radius: 20px;
  border: transparent;
  outline: transparent;
  margin: 0px 0px 25px 25px;

  font-size: 14px;
  font-weight: 700;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    transform: scale(1.02);
    text-shadow: 1px 1px 2px whitesmoke;
  }
`;