import Profile from './Profile';
import Statistics from './Statistics';
import { user, stats, friends } from '../data';
import Container from './Container';
import FriendList from './FriendsList/FriendList';

function App() {
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics
          title="Upload stats"
          stats={stats.default}
        />
      </Container>
      <Container>
        <Statistics stats={stats.default} />
      </Container>
      <Container>
        <FriendList friends={friends.default} />
      </Container>
    </>
  );
}

export default App;
