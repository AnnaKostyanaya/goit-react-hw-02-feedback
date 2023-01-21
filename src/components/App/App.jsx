import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Section from '../Section';
import { Container } from './App.styled';


export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0, 
    bad: 0,
  };

  handleIncrement = (vote) => {
    this.setState(prevState => {
      return {[vote]: prevState[vote] + 1}
      // let stateOptions = {}
      // stateOptions[vote] = prevState[vote] + 1
      // return stateOptions
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }; 

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback(); 
    const positivePers = (this.state.good / total) * 100;
    const positivePersFixed = (positivePers).toFixed(2);
    if (!total) {
      return 0;
    }
    return Number(positivePersFixed);
    // return Number((this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100).toFixed(2))
  }; 

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement} />
        </Section>
        {(this.state.good > 0 || this.state.neutral > 0 || this.state.bad) > 0 ? (
            <Section title="Statistics">
              <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} countTotal={this.countTotalFeedback()} countPositive={this.countPositiveFeedbackPercentage()} />
            </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }

}
