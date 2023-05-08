import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import {bgColor} from 'utils/bgColor';

export const Statistic = ({title, stats}) => {

    return (
<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
    {stats.map(({id, label, percentage}) => (
        <li className={css.item}
            key = {id}
            style ={{ backgroundColor: bgColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
        ))}
    
  </ul>
</section>
    )
}

Statistic.propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
    title: PropTypes.string,
  };