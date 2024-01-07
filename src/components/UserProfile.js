import React from 'react';
import '../App.css';

const UserProfile = ({ user }) => {
  return (
    <div role="region" label="User Profile">
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfile;