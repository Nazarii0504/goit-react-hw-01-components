import PropTypes from 'prop-types';
import { Container, Desc, Avatar, Name, Stats, List } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Desc>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Desc>

      <Stats>
        <List>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </List>
        <List>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </List>
        <List>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </List>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
