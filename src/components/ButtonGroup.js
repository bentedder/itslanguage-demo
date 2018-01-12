import React from 'react';
import styled from 'styled-components';
import { appBlue, appMedGrey } from '../styles';

const ButtonGroup = ({ onSelect, answer, onCheck, onSkip }) => (
  <Wrap>
    <SkipButton onClick={onSkip}>Overslaan</SkipButton>
    <PrimaryButton onClick={onCheck} disabled={!answer}>Antwoord indienen</PrimaryButton>
  </Wrap>
);
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
`;
const Button = styled.button`
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

const SkipButton = Button.extend`
  background-color: white;
  color: #B7BABD;
  border: 1px solid ${appMedGrey};
`;

const PrimaryButton = Button.extend`
  &:disabled {
    background-color: ${appMedGrey};
  }
`;

export default ButtonGroup;
