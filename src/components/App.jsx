import Profile from './Profile';
import Statistics from './Statistics';
import { user, stats } from '../data';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={stats.default}
      />
      <Statistics stats={stats.default} />
    </>
  );
}

export default App;
