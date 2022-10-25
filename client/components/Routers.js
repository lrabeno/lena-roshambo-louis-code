import React from "react";
import { Route, Routes } from "react-router-dom";
import Leaderboard from "./Leaderboard";
import Home from "./Home";
import SinglePlayer from "./SinglePlayer";
const Routers = ({
  players,
  setSelectedPlayer,
  selectedPlayer,
  FetchSelectSinglePlayer,
}) => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route
        exact
        path="/leaderboard"
        element={
          <Leaderboard
            players={players}
            selectedPlayer={selectedPlayer}
            FetchSelectSinglePlayer={FetchSelectSinglePlayer}
            setSelectedPlayer={setSelectedPlayer}
          />
        }
      ></Route>
      <Route
        exact
        path="/leaderboard/:playerId"
        element={
          <SinglePlayer
            players={players}
            selectedPlayer={selectedPlayer}
            FetchSelectSinglePlayer={FetchSelectSinglePlayer}
          />
        }
      />
      <Route exact path="/*" element={<p>No Match</p>}>
        Page not found..
      </Route>
    </Routes>
  );
};

export default Routers;
