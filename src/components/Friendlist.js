const FriendList = function ({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <li key={id} className="item">
            <span className={isOnline ? "status online" : "status offline"}>
              {isOnline}
            </span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
