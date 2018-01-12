import styled from 'styled-components';

export const appBlue = '#667FE6';
export const appLightGrey = '#e5e5e5';
export const appMedGrey = '#D0D5DB';
export const mainGreen = '#64D894';
export const lightGreen = '#82DFA9';
export const appRed = '#FD7469';
export const appLightRed = '#FD8486';

export const Button = styled.button`
  display: block;
  width: 345px;
  padding: 15px;
  background-color: ${appBlue};
  color: white;
  outline: 0;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const SkipButton = Button.extend`
  background-color: white;
  color: #B7BABD;
  border: 1px solid ${appMedGrey};
`;

export const PrimaryButton = Button.extend`
  &:disabled {
    background-color: ${appMedGrey};
  }
`;

export const WhiteButton = Button.extend`
  color: black;
  background-color: white;
`;
