import React, { useState } from 'react';
import '../App.css';

const SearchForm = ({ onSubmit, onClear }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  const handleClear = () => {
    setUsername('');
    onClear();
  };

  return (
    <form onSubmit={handleSubmit} role="group" className="form-container">
      <label htmlFor="githubUser">Type the GitHub username you want to search.</label>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            id="githubUser"
            aria-labelledby="githubUser"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {username && (
          <div className="clear-button">
            <button tabIndex="0" type="button" label="Clear search input" onClick={handleClear}>×</button>
          </div>
        )}
      </div>
      <button tabIndex="0" type="submit" label="Search GitHub username">Search</button>
    </form>
  );
};

export default SearchForm;