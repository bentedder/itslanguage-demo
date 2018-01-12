import React from 'react';
import styled from 'styled-components';
import { appBlue, appLightGrey } from '../styles';

// assumption: is a question with a prefix word
const Question = ({ question, answer }) => (
  <QuestionDetails>
    <Instructions>Vul het ontbrekende woord in</Instructions>
    <QuestionImage><img width="100%" alt="question" src="http://via.placeholder.com/575x320" /></QuestionImage>
    <Box>
      <AnswerBlank>{answer}</AnswerBlank>
      <QuestionText>{question}</QuestionText>
    </Box>
  </QuestionDetails>
);

const QuestionDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: white;
  border: 1px solid ${appLightGrey};
  border-bottom: none;
`;

const Instructions = styled.div`
  padding: 30px;
  border-bottom: 1px solid ${appLightGrey};
  width: 100%;
  text-align: center;
  @media (min-width: 700px) {
    font-size: 24px;
  }    
`;

const QuestionImage = styled.div`
  width: 575px;
  max-width: 80%;
  margin-top: 30px;
  background-color: ${appBlue};
`;

const Box = styled.div`
  padding: 60px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  @media (min-width: 700px) {
  }    
`;

const AnswerBlank = styled.div`
  min-width: 30px;
  position: relative;
  margin-right: 3px;
  text-align: center;
  color: ${appBlue};
  padding: 0 5px;
  
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background-color: ${appBlue};
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;

const QuestionText = styled.div`
  color: black;
`;

export default Question;