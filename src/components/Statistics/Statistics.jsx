import PropTypes from 'prop-types';
import StatsBoard from 'components/StatsBoard';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section
      className={s.statistics}
      style={{ maxWidth: stats.length * 75 }}
    >
      {title && <h2 className={s.title}>Upload stats</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatsBoard
            key={id}
            label={label}
            percentage={percentage}
          />
        ))}
      </ul>
    </section>
  );
}
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
