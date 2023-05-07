import { FriendsListItem } from './FriendsListIteam';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, name, avatar, isOnline}) => (
                <FriendsListItem key={id} name={name} avatar={avatar} isOnline={isOnline}/>
            ))}
        
      </ul>
      );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.string.isRequired,
        })
    )
}