import { Component } from "react";
import { Statistic } from "./Statistic/Statistic";
import { Container } from "./Container/Container";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const percent = ((good / this.countTotalFeedback()) * 100);
    return percent;
  };

  leaveFeedback = name => {
    this.setState(lastState => {
      return {
        [name]: lastState[name] + 1,
      };
    })
  }

  render(){
    return(
      <Container>
        <Section title="Please, leave feedback">
          <FeedbackOptions 
            names={Object.keys(this.state)}
            onClickFeedback={this.leaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage()}
            />
        </Section>
        ) : (
          <Notification message="Thre is no feedback"/>
        )}
        
      </Container>
    )
  }
}
