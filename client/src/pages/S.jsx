import React from "react";

const Scoreca = () => {
  const matchDetails = {
    venue: "Eden Gardens, Kolkata",
    date: "Dec 9, 2024",
    matchType: "T20 International",
    result: "Team A won by 20 runs",
  };

  const innings = [
    {
      team: "Team A",
      score: "200/5",
      overs: "20.0",
      extras: 10,
      batting: [
        {
          name: "Player 1",
          runs: 50,
          balls: 30,
          fours: 5,
          sixes: 2,
          strikeRate: 166.67,
        },
        {
          name: "Player 2",
          runs: 40,
          balls: 25,
          fours: 4,
          sixes: 1,
          strikeRate: 160,
        },
        {
          name: "Player 3",
          runs: 30,
          balls: 15,
          fours: 3,
          sixes: 2,
          strikeRate: 200,
        },
        {
          name: "Player 4",
          runs: 20,
          balls: 18,
          fours: 1,
          sixes: 1,
          strikeRate: 111.11,
        },
        {
          name: "Player 5",
          runs: 15,
          balls: 12,
          fours: 2,
          sixes: 0,
          strikeRate: 125,
        },
      ],
      bowling: [
        {
          name: "Bowler 1",
          overs: 4,
          maidens: 0,
          runs: 30,
          wickets: 2,
          economy: 7.5,
        },
        {
          name: "Bowler 2",
          overs: 4,
          maidens: 1,
          runs: 25,
          wickets: 3,
          economy: 6.25,
        },
        {
          name: "Bowler 3",
          overs: 4,
          maidens: 0,
          runs: 40,
          wickets: 1,
          economy: 10,
        },
        {
          name: "Bowler 4",
          overs: 4,
          maidens: 0,
          runs: 35,
          wickets: 1,
          economy: 8.75,
        },
      ],
      fallOfWickets: ["50/1", "110/2", "150/3", "180/4", "200/5"],
    },
    {
      team: "Team B",
      score: "180/7",
      overs: "20.0",
      extras: 12,
      batting: [
        {
          name: "Player 1",
          runs: 60,
          balls: 35,
          fours: 6,
          sixes: 3,
          strikeRate: 171.43,
        },
        {
          name: "Player 2",
          runs: 35,
          balls: 20,
          fours: 3,
          sixes: 2,
          strikeRate: 175,
        },
        {
          name: "Player 3",
          runs: 25,
          balls: 15,
          fours: 2,
          sixes: 1,
          strikeRate: 166.67,
        },
        {
          name: "Player 4",
          runs: 20,
          balls: 18,
          fours: 1,
          sixes: 0,
          strikeRate: 111.11,
        },
        {
          name: "Player 5",
          runs: 15,
          balls: 12,
          fours: 2,
          sixes: 0,
          strikeRate: 125,
        },
      ],
      bowling: [
        {
          name: "Bowler 1",
          overs: 4,
          maidens: 0,
          runs: 30,
          wickets: 2,
          economy: 7.5,
        },
        {
          name: "Bowler 2",
          overs: 4,
          maidens: 0,
          runs: 35,
          wickets: 1,
          economy: 8.75,
        },
        {
          name: "Bowler 3",
          overs: 4,
          maidens: 0,
          runs: 40,
          wickets: 2,
          economy: 10,
        },
        {
          name: "Bowler 4",
          overs: 4,
          maidens: 1,
          runs: 25,
          wickets: 2,
          economy: 6.25,
        },
      ],
      fallOfWickets: ["60/1", "100/2", "140/3", "160/4", "180/7"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-[#6ec4c4] text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Cricket Scorecard</h1>
        <p className="text-sm mt-2">{`${matchDetails.matchType} | ${matchDetails.date}`}</p>
        <p className="text-sm">{`Venue: ${matchDetails.venue}`}</p>
        <p className="mt-2 text-lg font-semibold">{matchDetails.result}</p>
      </div>

      {/* Innings Details */}
      {innings.map((inning, index) => (
        <div key={index} className="bg-white mt-6 p-6 shadow-md rounded-lg">
          {/* Team Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{inning.team}</h2>
            <p className="text-lg font-semibold">{`${inning.score} (${inning.overs} overs)`}</p>
          </div>

          {/* Batting Table */}
          <h3 className="text-lg font-bold mt-4">Batting</h3>
          <table className="table-auto w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Batter
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                  Runs
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                  Balls
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                  4s
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                  6s
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                  SR
                </th>
              </tr>
            </thead>
            <tbody>
              {inning.batting.map((player, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2">{player.name}</td>
                  <td className="px-4 py-2 text-center">{player.runs}</td>
                  <td className="px-4 py-2 text-center">{player.balls}</td>
                  <td className="px-4 py-2 text-center">{player.fours}</td>
                  <td className="px-4 py-2 text-center">{player.sixes}</td>
                  <td className="px-4 py-2 text-center">
                    {player.strikeRate.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Bowling Table */}
          <h3 className="text-lg font-bold mt-6">Bowling</h3>
          <table className="table-auto w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Bowler
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                  Overs
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                  Maidens
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                  Runs
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                  Wickets
                </th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                  Econ
                </th>
              </tr>
            </thead>
            <tbody>
              {inning.bowling.map((bowler, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2">{bowler.name}</td>
                  <td className="px-4 py-2 text-center">{bowler.overs}</td>
                  <td className="px-4 py-2 text-center">{bowler.maidens}</td>
                  <td className="px-4 py-2 text-center">{bowler.runs}</td>
                  <td className="px-4 py-2 text-center">{bowler.wickets}</td>
                  <td className="px-4 py-2 text-center">
                    {bowler.economy.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Fall of Wickets */}
          <h3 className="text-lg font-bold mt-6">Fall of Wickets</h3>
          <p className="text-sm mt-2">{inning.fallOfWickets.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Scoreca;
