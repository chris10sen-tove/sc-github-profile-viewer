import React from 'react';
import '../App.css';

const UserStats = ({ user }) => {
  return (
    <div role="region" label="User Stats">
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repositories: {user.public_repos}</p>
    </div>
  );
};

export default UserStats;