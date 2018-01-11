import React, { Component } from 'react';
import Answers from './Answers';
import Question from './Question';

class QuestionWrap extends Component {

  state = {
    answer: null,
  };

  answerQuestion = (answer) => {
    this.setState({ answer });
  }

  render() {
    return (
      <div>
        <Question answer={this.state.answer} />
        <Answers onSelect={this.answerQuestion} />
      </div>
    )
  }
}

export default QuestionWrap