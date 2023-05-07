import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

export const FriendsListItem = ({isOnline, name, avatar}) => {
    return <li className={css.item}>
      <span className={isOnline ? `${css.status} ${css.isOnline}` : `${css.status} ${css.isOffline}`}></span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>
}

FriendsListItem.propTypes = {
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
  };