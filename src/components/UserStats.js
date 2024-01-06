import React from 'react';
import '../App.css';

const UserStats = ({ user }) => {
  return (
    <div>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repositories: {user.public_repos}</p>
    </div>
  );
};

export default UserStats;