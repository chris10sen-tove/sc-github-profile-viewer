import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import UserProfile from './components/UserProfile';
import UserStats from './components/UserStats';
import RepositoryList from './components/RepositoryList';
import RepositoryDetails from './components/RepositoryDetails';

const App = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [selectedRepository, setSelectedRepository] = useState(null);

  const fetchUserData = useCallback(async () => {
    try {
      console.log("Github Token:", process.env.REACT_APP_GITHUB_TOKEN)
      const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      });
      setUser(response.data);

      const repoResponse = await axios.get(response.data.repos_url);
      setRepositories(repoResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [username]);

  useEffect(() => {
    if (username) {
      fetchUserData();
    }
  }, [username, fetchUserData]);

  return (
    <div className="App-container">
      <h1>GitHub Profile Viewer</h1>
      <SearchForm onSubmit={(username) => setUsername(username)} />

      {user && (
        <div>
          <UserProfile user={user} />
          <UserStats user={user} />
        </div>
      )}

      {repositories.length > 0 && (
        <div>
          <RepositoryList
            repositories={repositories}
            onSelect={(repository) => setSelectedRepository(repository)}
          />
        </div>
      )}

      {selectedRepository && (
        <div>
          <RepositoryDetails repository={selectedRepository} />
        </div>
      )}
    </div>
  );
};

export default App;