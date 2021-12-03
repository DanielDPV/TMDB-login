import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { getRequestToken } from './helpers/fetchService';

function Home() {
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);
      const data = await getRequestToken();
      console.log(data);
      window.location = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=http://localhost:3000/approved`;
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={login} disabled={loading}>
          Log in
        </button>
      </header>
    </div>
  );
}

export default Home;
