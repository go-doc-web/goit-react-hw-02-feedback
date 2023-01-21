import { Component } from 'react';
import styles from './ReviewsWidget.module.scss';

class ReviewsWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback(good, neutral, bad) {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(good, neutral, bad) {
    const total = this.countTotalFeedback(good, neutral, bad);

    if (!total) {
      return 0;
    }
    const positiveFeedback = ((good / total) * 100).toFixed(1);
    return positiveFeedback;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(good, neutral, bad);
    const positiveFeedback = this.countPositiveFeedbackPercentage(
      good,
      neutral,
      bad
    );
    console.log(positiveFeedback);
    return (
      <section className={styles.reviews}>
        <div className="btn-block">
          <h2>P. L. F.</h2>
          <div className="wrapper">
            <button className={styles.btn} type="button">
              good
            </button>
            <button className={styles.btn} type="button">
              neutral
            </button>
            <button className={styles.btn} type="button">
              bad
            </button>
          </div>
        </div>

        <div className="statistics">
          <h2>statistics</h2>
          <div className="feedback-result">
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>total: {totalFeedback}</p>
            <p>positive feedback: {positiveFeedback}%</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ReviewsWidget;
