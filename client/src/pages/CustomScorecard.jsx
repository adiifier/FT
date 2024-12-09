import React, { useState } from "react";

const CricketScoreCard = () => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("team1");

  const handleAddPlayer = () => {
    if (!playerName.trim()) return;

    const newPlayer = {
      name: playerName,
      runs: 0,
      balls: 0,
      strikeRate: 0,
      fours: 0,
      sixes: 0,
      wickets: 0,
      isOut: false,
    };

    if (selectedTeam === "team1") {
      setTeam1Players((prevPlayers) => [...prevPlayers, newPlayer]);
    } else {
      setTeam2Players((prevPlayers) => [...prevPlayers, newPlayer]);
    }

    setPlayerName("");
  };

  const updatePlayerStats = (team, index, field, value) => {
    const players = team === "team1" ? [...team1Players] : [...team2Players];
    const player = players[index];

    if (field === "isOut") {
      player.isOut = !player.isOut;
    } else {
      player[field] = Math.max(0, player[field] + value);

      if (field === "runs" || field === "balls") {
        player.strikeRate =
          player.balls > 0
            ? ((player.runs / player.balls) * 100).toFixed(2)
            : 0;
      }
    }

    if (team === "team1") {
      setTeam1Players(players);
    } else {
      setTeam2Players(players);
    }
  };

  const renderPlayerRow = (player, index, team) => (
    <tr key={index} className="border-b">
      <td className="p-3">{player.name}</td>
      <td className="p-3">
        <div className="flex items-center">
          <button
            className="px-2 py-1 bg-gray-300 rounded mr-2"
            onClick={() => updatePlayerStats(team, index, "runs", -1)}
            disabled={player.runs <= 0}
          >
            -
          </button>
          {player.runs}
          <button
            className="px-2 py-1 bg-gray-300 rounded ml-2"
            onClick={() => updatePlayerStats(team, index, "runs", 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="p-3">
        <div className="flex items-center">
          <button
            className="px-2 py-1 bg-gray-300 rounded mr-2"
            onClick={() => updatePlayerStats(team, index, "balls", -1)}
            disabled={player.balls <= 0}
          >
            -
          </button>
          {player.balls}
          <button
            className="px-2 py-1 bg-gray-300 rounded ml-2"
            onClick={() => updatePlayerStats(team, index, "balls", 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="p-3">{player.strikeRate}</td>
      <td className="p-3">
        <div className="flex items-center">
          <button
            className="px-2 py-1 bg-gray-300 rounded mr-2"
            onClick={() => updatePlayerStats(team, index, "fours", -1)}
            disabled={player.fours <= 0}
          >
            -
          </button>
          {player.fours}
          <button
            className="px-2 py-1 bg-gray-300 rounded ml-2"
            onClick={() => updatePlayerStats(team, index, "fours", 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="p-3">
        <div className="flex items-center">
          <button
            className="px-2 py-1 bg-gray-300 rounded mr-2"
            onClick={() => updatePlayerStats(team, index, "sixes", -1)}
            disabled={player.sixes <= 0}
          >
            -
          </button>
          {player.sixes}
          <button
            className="px-2 py-1 bg-gray-300 rounded ml-2"
            onClick={() => updatePlayerStats(team, index, "sixes", 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="p-3">
        <div className="flex items-center">
          <button
            className="px-2 py-1 bg-gray-300 rounded mr-2"
            onClick={() => updatePlayerStats(team, index, "wickets", -1)}
            disabled={player.wickets <= 0}
          >
            -
          </button>
          {player.wickets}
          <button
            className="px-2 py-1 bg-gray-300 rounded ml-2"
            onClick={() => updatePlayerStats(team, index, "wickets", 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="p-3">
        <button
          className={`px-4 py-2 rounded ${
            player.isOut ? "bg-red-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => updatePlayerStats(team, index, "isOut")}
        >
          {player.isOut ? "Out" : "Not Out"}
        </button>
      </td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-center text-4xl font-bold text-telagreen mb-6">
        Cricket Scorecard Creator
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Team 1 Name
            </label>
            <input
              type="text"
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-telagreen"
              placeholder="Enter Team 1 Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Team 2 Name
            </label>
            <input
              type="text"
              value={team2}
              onChange={(e) => setTeam2(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-telagreen"
              placeholder="Enter Team 2 Name"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-telagreen"
          >
            <option value="team1">{team1 || "Team 1"}</option>
            <option value="team2">{team2 || "Team 2"}</option>
          </select>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="p-3 flex-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-telagreen"
            placeholder="Enter Player Name"
          />
          <button
            onClick={handleAddPlayer}
            className="px-4 py-3 bg-telagreen text-white rounded-lg hover:bg-telagreen"
          >
            Add Player
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4">{team1 || "Team 1"}</h2>
            <table className="w-full text-left bg-white shadow-md rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">Player</th>
                  <th className="p-3">Runs</th>
                  <th className="p-3">Balls</th>
                  <th className="p-3">Strike Rate</th>
                  <th className="p-3">4s</th>
                  <th className="p-3">6s</th>
                  <th className="p-3">Wickets</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {team1Players.map((player, index) =>
                  renderPlayerRow(player, index, "team1")
                )}
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">{team2 || "Team 2"}</h2>
            <table className="w-full text-left bg-white shadow-md rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">Player</th>
                  <th className="p-3">Runs</th>
                  <th className="p-3">Balls</th>
                  <th className="p-3">Strike Rate</th>
                  <th className="p-3">4s</th>
                  <th className="p-3">6s</th>
                  <th className="p-3">Wickets</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {team2Players.map((player, index) =>
                  renderPlayerRow(player, index, "team2")
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketScoreCard;
