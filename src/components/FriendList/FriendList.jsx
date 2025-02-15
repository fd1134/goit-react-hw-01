import PropTypes from "prop-types";
import css from "./FriendList.module.css"

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ avatar, name, isOnline ,id}) => (
        <li key={id} className={css.friendsListItem}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.onlineText : css.offlineText}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
