import axios from 'axios';
import Layout from './components/Layout';
import Routers from './components/Routers';
import React, { useState, useEffect } from 'react';

const App = () => {
  //for loading the data.
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  //state to store the players data coming from the server-backend.
  const [players, setPlayers] = useState([]);

  //calling/fetching the data from the server using axios.
  //using useEffect to display the data in the UI after the first rendering.
  useEffect(() => {
    const fetchPlayers = async () => {
      setLoadingIndicator(true);
      await axios.get('http://localhost:8080/api/players').then((res) => {
        const players = res.data;
        setPlayers(players);
        setLoadingIndicator(false);
        console.log(players);
      });
    };
    fetchPlayers();
  }, []);

  const [selectedPlayer, setSelectedPlayer] = useState({});

  const FetchSelectSinglePlayer = async (playerId) => {
    const response = await axios.get(
      `http://localhost:8080/api/players/${playerId}`
    );
    const onePlayer = response.data;
    setSelectedPlayer(onePlayer);
    console.log(onePlayer);
  };

  //to display in the UI while the data is loading.
  if (loadingIndicator) {
    return <p>Data is Loading...</p>;
  }

  return (
    <div className="row container">
      <div>
        <Layout />
        <Routers
          players={players}
          FetchSelectSinglePlayer={FetchSelectSinglePlayer}
        />
      </div>
    </div>
  );
};

export default App;
