import PropTypes from 'prop-types'
import css from './Transactions.module.css'


export const Transactions = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
  <thead className = {css.tableHead}>
    <tr>
      <th className = {css.tableTitle}>Type</th>
      <th className = {css.tableTitle}>Amount</th>
      <th className = {css.tableTitle}>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(({id, type, amount, currency}) => (
          <tr className={css.tableRow} key={id}>
          <td className={css.tableValue}>{type}</td>
          <td className={css.tableValue}>{amount}</td>
          <td className={css.tableValue}>{currency}</td>
        </tr> 
    ))}
  </tbody>
</table>
    );
};

Transactions.propsType = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};