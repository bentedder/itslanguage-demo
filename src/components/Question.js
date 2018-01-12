import React from 'react';
import styled from 'styled-components';
import { appBlue, appLightGrey, mainGreen } from '../styles';

// assumption: is a question with a prefix word
const Question = ({ question, answer, isCorrect }) => (
  <QuestionDetails>
    <Instructions>
      {answer && isCorrect === true && <span>Je antwoord is goed!</span> }
      {answer && isCorrect === false && <span>Je antwoord is fout!</span> }
      {isCorrect == null && <span>Vul het ontbrekende woord in</span> }
    </Instructions>
    <QuestionImage>
      <img width="100%" alt="question" src={require('../icons/IMG2_desktop@2x.png')} />
    </QuestionImage>
    <Box>
      <AnswerBlank answer={answer} isCorrect={isCorrect}>{answer}</AnswerBlank>
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
  @media (min-width: 1023px) {
    font-size: 24px;
  }    
`;

const QuestionImage = styled.div`
  width: 575px;
  max-width: 80%;
  margin-top: 30px;
`;

const Box = styled.div`
  padding: 60px;
  display: flex;
  justify-content: center;
  font-size: 24px;
`;

const AnswerBlank = styled.div`
  min-width: 30px;
  position: relative;
  margin-right: 3px;
  text-align: center;
  color: ${props => {
    if (props.answer && props.isCorrect !== null) {
      return props.isCorrect ? mainGreen : 'red'
    } else {
      return appBlue;
    }
  }};
  padding: 0 5px;
  
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background-color: ${props => {
      if (props.answer && props.isCorrect !== null) {
        return props.isCorrect ? mainGreen : 'red'
      } else {
        return appBlue;
      }
    }};
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;

const QuestionText = styled.div`
  color: black;
`;

export default Question;