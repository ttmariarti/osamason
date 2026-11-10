import React from 'react';
import Statistics from './components/Statistics.jsx';
import FriendList from './components/FriendList.jsx';
import statistics from './data/statistics.json';
import friends from './data/friends.json';

function App() {
  return (
    <main className="page">
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
    </main>
  );
}

export default App;
