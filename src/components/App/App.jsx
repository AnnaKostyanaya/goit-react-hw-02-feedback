import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import { Container } from './App.styled';


export class App extends Component {
  static defaultProps = {
    // initialValue: 0,
  };

  state = {
    good: 0,
    neutral: 0, 
    bad: 0,
  };

  handleIncrement = (vote) => {
    this.setState(prevState => {
      let stateOptions = {}
      stateOptions[vote] = prevState[vote] + 1
      return stateOptions
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }; 

  countPositiveFeedbackPercentage = () => {
    if (this.state.good > 0 && this.state.neutral > 0 && this.state.bad) {return 0;}
    return Number((this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100).toFixed(2))
  }; 

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleIncrement} />
        </Section>
        {(this.state.good > 0 || this.state.neutral > 0 || this.state.bad) > 0 && (
            <Section title="Statistics">
              <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} countTotal={this.countTotalFeedback()} countPositive={this.countPositiveFeedbackPercentage()} />
            </Section>
        )}
      </Container>
    );
  }

}
