import PropTypes from "prop-types";
import defaultImage from "./default-image-icon-missing-picture-page-vector-40546530.jpeg";

const MarkUp = function (data) {
  const {
    username,
    tag = "no tag name",
    location = "loading...",
    avatar = defaultImage,
    stats,
  } = data;

  return (
    <main>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt={tag} className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">{Object.keys(stats)[0]}</span>
            <span className="quantity"> {stats.followers}</span>
          </li>
          <li>
            <span className="label">{Object.keys(stats)[1]}</span>
            <span className="quantity"> {stats.views}</span>
          </li>
          <li>
            <span className="label">{Object.keys(stats)[2]}</span>
            <span className="quantity"> {stats.likes}</span>
          </li>
        </ul>
      </div>
    </main>
  );
};

MarkUp.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default MarkUp;
