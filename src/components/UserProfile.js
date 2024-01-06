import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfile;