import React from 'react';
import styled from 'styled-components';
import { SkipButton, PrimaryButton } from '../styles';

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

export default ButtonGroup;
