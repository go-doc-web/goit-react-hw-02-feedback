import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onClickFeedbackBtn }) => {
  const elements = options.map(({ id, name, color }) => {
    return (
      <li key={id}>
        {/* <button onClick={() => onClickFeedbackBtn(name)} type="button">
            {name}
          </button> */}
        <button
          onClick={() => onClickFeedbackBtn(name)}
          className={`${styles.button} ${styles.raised} `}
          style={{ backgroundColor: color }}
        >
          {name}
        </button>
      </li>
    );
  });
  return <ul className={styles.list}>{elements}</ul>;
};

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
  options: [
    { id: '4', name: 'good', color: 'green' },
    { id: '5', name: 'neutral', color: 'blue' },
    { id: '6', name: 'bad', color: 'red' },
  ],
};

FeedbackOptions.propTypes = {
  onClickFeedbackBtn: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
};
