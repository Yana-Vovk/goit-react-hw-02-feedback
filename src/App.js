import './App.css';
import React, { Component } from 'react';
import Feedback from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Cover from './components/Cover/Cover';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    const grade = e.target.name;
    this.setState((currentValue) => ({
      [grade]: currentValue[grade] + 1,
    }))
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => (acc += value), 0);
  }

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good * 100)/total);
  }
  
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state.good, total);
    const options = Object.keys(this.state);
    return (
      <div>
        <Cover
          title="Please leave feedback">
          <Feedback
            options={options}
            onLeaveFeedback={this.onLeaveFeedback} />
        </Cover>
        <Cover
          title="Statistics">
          {total>0
            ? (<Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage} />)
            : (<Notification message="No feedback given" />)
          }          
        </Cover>
      </div>
    );
  }
}

export default App;
