import { useState } from "react";
import { Statistic } from "./Statistic/Statistic";
import { Container } from "./Container/Container";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onLeaveFeedback = (option) => {
    if (option === 'good') {
      setGood((prevState) => prevState + 1);
    } else if (option === 'neutral') {
      setNeutral((prevState) => prevState + 1);
    } else if (option === 'bad') {
      setBad((prevState) => prevState + 1);
    } else {
      return;
    }
  };

  const countTotalFeedback = () => {
      const total = good + neutral + bad;
      return total;
  };

  const countPositiveFeedbackPercentage = () => {
      if (countTotalFeedback() === 0) {
        return 0;
      }
      return ((good * 100) / countTotalFeedback());
  };

  return(
    <Container>
         <Section title="Please, leave feedback"/>
             <FeedbackOptions 
                names={Object.keys({good, neutral, bad})}
                onClickFeedback={onLeaveFeedback}
             />
          <Section title="Statistics">
            {countTotalFeedback() !== 0 ? (
              <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                percent={countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback"/>
            )}
          </Section>
      </Container>
  )
}



















// export class App extends Component{
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const {good, neutral, bad} = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const {good} = this.state;
//     const percent = ((good / this.countTotalFeedback()) * 100);
//     return percent;
//   };

//   leaveFeedback = name => {
//     this.setState(lastState => {
//       return {
//         [name]: lastState[name] + 1,
//       };
//     })
//   }

//   render(){
//     return(
//       <Container>
//         <Section title="Please, leave feedback">
//           <FeedbackOptions 
//             names={Object.keys(this.state)}
//             onClickFeedback={this.leaveFeedback}
//           />
//         </Section>
//         {this.countTotalFeedback() > 0 ? (
//           <Section title="Statistics">
//             <Statistic
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               percent={this.countPositiveFeedbackPercentage()}
//             />
//         </Section>
//         ) : (
//           <Notification message="Thre is no feedback"/>
//         )}
        
//       </Container>
//     )
//   }
// }
