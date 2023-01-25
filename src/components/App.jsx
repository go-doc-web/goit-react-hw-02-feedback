import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
// import ReviewsWidget from './ReviewsWidget/ReviewsWidget';

const optionsFeedback = [
  { id: '1', name: 'good', color: 'green' },
  { id: '1', name: 'neutral', color: 'blue' },
  { id: '1', name: 'bad', color: 'red' },
];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlefeedbackBtn = name => {
    this.setState(prevstate => ({
      [name]: prevstate[name] + 1,
    }));
  };
  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={optionsFeedback}
            onClickFeedbackBtn={this.handlefeedbackBtn}
          />
        </Section>
      </>
    );
  }
}

export default App;
