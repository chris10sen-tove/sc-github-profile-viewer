import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit} role="search">
      <label htmlFor="githubUser">Type the GitHub username you want to search.</label>
      <input
        type="text"
        id="githubUser"
        aria-labelledby="githubUser"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;