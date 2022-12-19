import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionDiscription}>
        <tr>
          <th className={css.transactionDetail}>TYPE</th>
          <th className={css.transactionDetail}>AMOUNT</th>
          <th className={css.transactionDetail}>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.transactionItem} key={id}>
              <td className={css.transactionData}>{type}</td>
              <td className={css.transactionData}>{amount}</td>
              <td className={css.transactionData}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
