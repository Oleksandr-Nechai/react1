import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={s.dd}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

export default TransactionItem;

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
