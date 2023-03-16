import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
      }.isRequired
    )
  ).isRequired,
};
