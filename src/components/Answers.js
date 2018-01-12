import React from 'react';
import styled from 'styled-components';
import { appBlue } from '../styles';

const answerData = ['ik', 'jij/je', 'u', 'hij', 'zij/ze', 'wij/we', 'jullie'];

const Answers = ({ onSelect }) => (
  <Scrollable>
    <AnswerList>
      {answerData.map((answer, i) => 
        <Answer
          onClick={onSelect.bind(null, answer)}
          key={i}
        >{answer}</Answer>
      )}
    </AnswerList>
  </Scrollable>
);

const Scrollable = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;
  background-color: ${appBlue};
  padding: 25px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  @media (min-width: 700px) {
    justify-content: center;
  }
`;

const AnswerList = styled.div`
  display: flex;
  width: fit-content;
`;

const Answer = styled.div`
  display: flex;
  height: 54px;
  min-width: 100px;
  margin-right: 4px;
  padding: 0 25px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background: white;
  color: black;
  cursor: pointer;

  &:last-child {
    margin-right: 25px;
  }
`;

export default Answers;
