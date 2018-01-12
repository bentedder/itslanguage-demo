import React from 'react';
import styled from 'styled-components';
import { WhiteButton, appRed, appLightRed, mainGreen, lightGreen } from '../styles';

const Result = ({ isCorrect, answer, question, onNext }) => (
  <Wrap isCorrect={isCorrect}>
    <ResultIcon isCorrect={isCorrect} />
    <ResultDetails>
      <ResultButton>
        <WhiteButton style={{ width: 'auto', marginRight: 10 }}>{answer}</WhiteButton>
        <span>Some text</span>
      </ResultButton>
      <ResultButton>
        <WhiteButton style={{ width: 'auto', marginRight: 10 }}>{answer}</WhiteButton>
        <span>Some text</span>
      </ResultButton>
    </ResultDetails>
    <ButtonWrap isCorrect={isCorrect}>
      <WhiteButton style={{ color: isCorrect ? mainGreen : appRed }} onClick={onNext}>Volgende Vraag</WhiteButton>
    </ButtonWrap>
  </Wrap>
);
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  min-height: 30vh;
  justify-content: space-between;
  background-color: ${props => props.isCorrect ? mainGreen : appRed};
  align-items: center;
`;

const ResultIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: white;
  background-image: url(${props => props.isCorrect ? require('../icons/thumbs-up.svg') : require('../icons/thumbs-down.svg')});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50%;
`;

const ResultDetails = styled.div`
  flex: 1;
  padding-top: 50px;
  color: white;
`;

const ResultButton = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: center;
  background-color: ${props => props.isCorrect ? lightGreen : appLightRed};
`;

export default Result;
