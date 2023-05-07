import { FriendListItem } from './FriendsListIteam';
import PropTypes from 'prop-types';
import css from './Friendlist.module.css';

export const Friendlist = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, name, avatar, isOnline}) => (
                <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline}/>
            ))}
        
      </ul>
      );
};

Friendlist.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.string.isRequired,
        })
    )
}