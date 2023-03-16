import PropTypes from 'prop-types';
import createRandomColor from 'utils/createRandomColor';
import s from './StatsBoard.module.css';

function StatsBoard({ label, percentage }) {
  return (
    <li
      className={s.item}
      style={{ backgroundColor: createRandomColor() }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

export default StatsBoard;

StatsBoard.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
