import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Leaderboard = (props) => {
  //styling:
  const tableStyling = {
    border: "1px solid black",
    width: "50%",
  };
  //state to hold single player

  //renderPlayers is function that will render all players in JSX.
  console.log(props, "from leaderboard");

  const renderPlayers = props.players.map((player) => {
    return (
      <tr key={player.id}>
        <td
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => props.FetchSelectSinglePlayer(player.id)}
        >
          <Link to={`/leaderboard/${player.id}`}> {player.username}</Link>
        </td>
      </tr>
    );
  });

  return (
    <table style={tableStyling}>
      <thead>
        <tr>
          <th style={tableStyling}>Player Names</th>
        </tr>
      </thead>
      <tbody>{renderPlayers}</tbody>
    </table>
  );
};

export default Leaderboard;
