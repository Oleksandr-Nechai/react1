import {
  user,
  stats,
  friends,
  transactions,
} from '../data';
import Profile from './Profile';
import Statistics from './Statistics';
import Container from './Container';
import FriendList from './FriendsList/FriendList';
import TransactionHistory from './TransactionHistory';

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
        <Statistics title="Upload stats" stats={stats} />
      </Container>
      <Container>
        <Statistics stats={stats} />
      </Container>
      <Container>
        <FriendList friends={friends} />
      </Container>
      <Container>
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
}

export default App;
