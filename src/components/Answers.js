import React from 'react';
import styled from 'styled-components';

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

  &:last-child {
    margin-right: 25px;
  }
`;

const Scrollable = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;
  background: #667FE6;
  padding: 25px;

  @media (min-width: 700px) {
    justify-content: center;
  }
`;

const AnswerList = styled.div`
  display: flex;
  width: fit-content;
`;

export default Answers;