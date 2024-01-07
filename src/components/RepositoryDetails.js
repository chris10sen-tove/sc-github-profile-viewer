import React from 'react';
import '../App.css';

const RepositoryDetails = ({ repository }) => {
  return (
    <div role="region" label="Repository Details">
      <h4>{repository.name}</h4>
      <p>{repository.description}</p>
      <p>Language: {repository.language}</p>
      <p>Last Updated: {repository.updated_at}</p>
    </div>
  );
};

export default RepositoryDetails;