 import PropTypes from 'prop-types';
 import css from './Profile.module.css'

export const Profile = ({ username, tag, location, avatar, ststs: {followers, views, likes}}) => {
return (
  <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.lpcation}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span class={css.quantity}>{followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span class={css.quantity}>{views}</span>
    </li>
    <li>
      <span className={css.label}>{likes}</span>
      <span className={css.quantity}>3000</span>
    </li>
  </ul>
</div>
)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}).isRequired
};
