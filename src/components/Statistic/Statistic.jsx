import PropTypes from 'prop-types';

export const Statistic = ({good, neutral, bad, total, percent}) => {
    return (
        <ul>
            <li>good {good}</li>
            <li>neutral {neutral}</li>
            <li>bad {bad}</li>
            <li>total {total}</li>
            <li>Positive feedback: {percent}</li>
        </ul>
    )
}

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percent: PropTypes.string.isRequired,
  };