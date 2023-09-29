const FriendList = function ({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => {
        return (
          <li key={friend.id} className="item">
            <span
              className={friend.isOnline ? "status online" : "status offline"}
            >
              {friend.isOnline}
            </span>
            <img
              className="avatar"
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
