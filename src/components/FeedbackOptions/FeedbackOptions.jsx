import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onClickFeedbackBtn }) => {
  const elements = options.map(({ id, name, color }) => {
    return (
      <ul>
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
      </ul>
    );
  });
  return <>{elements}</>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onClickFeedbackBtn: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
