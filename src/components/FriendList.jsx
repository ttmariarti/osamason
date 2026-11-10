import React from 'react';
import FriendListItem from './FriendListItem.jsx';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, ...friend }) => (
        <FriendListItem key={id} {...friend} />
      ))}
    </ul>
  );
}

export default FriendList;
