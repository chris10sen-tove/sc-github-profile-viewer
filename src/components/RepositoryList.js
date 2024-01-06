import React from 'react';
import './RepositoryList.css';

const RepositoryList = ({ repositories }) => {
  return (
    <div>
      <h3>Recent Repositories</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;