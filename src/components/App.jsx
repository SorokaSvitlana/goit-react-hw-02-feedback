import React, { Component } from "react";
import {Statistic} from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleAddFeedback = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const options = Object.keys(this.state);

    return <div> 
      <Section title="Please leave feedback">
  <FeedbackOptions options={options} onLeaveFeedback={this.handleAddFeedback} />
  {this.countTotalFeedback() > 0 ? (
    <Statistic
      good={this.state.good}
      neutral={this.state.neutral}
      bad={this.state.bad}
      total={this.countTotalFeedback()}
      positivePercentage={this.countPositiveFeedbackPercentage()}
    > </Statistic>
  ) : (
    <Notification message="There is no feedback" />
  )}
</Section>
    </div>;
  }
}