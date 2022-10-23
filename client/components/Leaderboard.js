import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SinglePlayer from './SinglePlayer';

const Leaderboard = () => {
  //for loading the data.
  const [loadingIndicator, setLoadingIndicator] = useState(false);
  //state to store the players data coming from the server-backend.
  const [players, setPlayers] = useState([]);
  //state to hold single player
  const [selectedPlayer, setSelectedPlayer] = useState({});

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

  //get single player:
  // useEffect(() => {
  //   const FetchSelectSinglePlayer = async (playerId) => {
  //     const response = await axios.get(
  //       `http://localhost:8080/api/players/${playerId}`
  //     );
  //     const onePlayer = response.data;
  //     setSelectedPlayer(onePlayer);
  //   };
  //   FetchSelectSinglePlayer();
  // }, [selectedPlayer]);

  const FetchSelectSinglePlayer = async (playerId) => {
    const response = await axios.get(
      `http://localhost:8080/api/players/${playerId}`
    );
    const onePlayer = response.data;
    setSelectedPlayer(onePlayer);
  };

  //to display in the UI while the data is loading.
  if (loadingIndicator) {
    return <p>Data is Loading...</p>;
  }
  //renderPlayers is function that will render all players in JSX.
  const renderPlayers = players.map((player) => {
    return (
      <>
        <ul>
          <li key={player.id} onClick={() => setSelectedPlayer(player.id)}>
            {player.username}
          </li>
        </ul>
      </>
    );
  });

  return (
    <>
      <div>Leaderboard Names</div>
      {selectedPlayer && selectedPlayer.id ? (
        <SinglePlayer selectedPlayer={selectedPlayer} />
      ) : (
        { renderPlayers }
      )}
      {/* {renderPlayers}
      <SinglePlayer selectedPlayer={selectedPlayer} /> */}
    </>
  );
};

export default Leaderboard;
