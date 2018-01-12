import React, { Component } from 'react';
import Answers from './Answers';
import Question from './Question';
import ButtonGroup from './ButtonGroup';
import styled from 'styled-components';

class QuestionWrap extends Component {

  state = {
    answer: null,
    question: 'ben Stefan', 
  };

  setAnswer = (answer) => {
    this.setState({ answer });
  }

  checkAnswer = () => {
    console.log('check answer');
  }

  skipQuestion = () => {
    console.log('skip question');
  }

  render() {
    return (
      <Wrapper>
        <Question answer={this.state.answer} question={this.state.question} />
        <Answers onSelect={this.setAnswer} />
        <ButtonGroup
          answer={this.state.answer}
          onSkip={this.skipQuestion}
          onCheck={this.checkAnswer}
        />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: #F9FAFC;
  padding: 10px;
`;

export default QuestionWrap;
