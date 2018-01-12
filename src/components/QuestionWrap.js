import React, { Component } from 'react';
import Answers, { answerData } from './Answers';
import Result from './Result';
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
    this.setState({ answer, isCorrect: null });
  }

  checkAnswer = () => {
    this.setState({
      isCorrect: this.state.answer === answerData[0]
    });
  }

  skipQuestion = () => {
    console.log('skip question');
  }

  nextQuestion = () => {
    this.setState({
      isCorrect: null,
      answer: '',
    });
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
        {this.state.answer && this.state.isCorrect !== null &&
          <Result
            isCorrect={this.state.isCorrect}
            answer={this.state.answer}
            question={this.state.question}
            onNext={this.nextQuestion}
          />
        }
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: #F9FAFC;
  padding: 10px;
`;

export default QuestionWrap;
