import React, { Component } from 'react';
import Answers, { answerData } from './Answers';
import Question from './Question';
import ButtonGroup from './ButtonGroup';
import styled from 'styled-components';

class QuestionWrap extends Component {

  state = {
    answer: null,
    question: 'ben Stefan', 
    isCorrect: null,
  };

  setAnswer = (answer) => {
    this.setState({ answer, isCorrect: null }, () => {
      console.log(this.state);
    });
  }

  checkAnswer = () => {
    console.log(this.state.answer);
    this.setState({
      isCorrect: this.state.answer === answerData[0]
    }, () => {
      console.log(this.state);
    });
  }

  skipQuestion = () => {
    console.log('skip question');
  }

  render() {
    return (
      <Wrapper>
        <Question
          isCorrect={this.state.isCorrect}
          answer={this.state.answer}
          question={this.state.question}
        />
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
