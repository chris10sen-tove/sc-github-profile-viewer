import React from 'react';
import '../App.css';

const RepositoryList = ({ repositories }) => {
  return (
    <div role="region">
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