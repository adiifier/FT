import React from "react";

const UpcomingMatches = () => {
  const matches = [
    {
      date: "Dec 10, 2024",
      time: "7:00 PM IST",
      match: "Team A vs Team B",
      venue: "Wankhede Stadium, Mumbai",
      series: "T20 Series 2024",
      teamLogos: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
    },
    {
      date: "Dec 12, 2024",
      time: "3:00 PM IST",
      match: "Team C vs Team D",
      venue: "Eden Gardens, Kolkata",
      series: "ODI Series 2024",
      teamLogos: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
    },
    {
      date: "Dec 15, 2024",
      time: "6:00 PM IST",
      match: "Team E vs Team F",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      series: "Test Series 2024",
      teamLogos: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
    },
    {
      date: "Dec 20, 2024",
      time: "8:00 PM IST",
      match: "Team G vs Team H",
      venue: "Green Park Stadium, Kanpur",
      series: "T20 Series 2024",
      teamLogos: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6ec4c4] to-[#c2e59c] text-gray-800 p-6">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-4xl font-bold text-white">Upcoming Matches</h1>
        <p className="text-lg text-gray-200 mt-2">
          Stay tuned for the latest cricket matches and schedules!
        </p>
      </div>

      {/* Match Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <div className="flex justify-between items-center mb-4">
              {/* Date and Time */}
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  {match.date}
                </p>
                <p className="text-lg font-bold">{match.time}</p>
              </div>
              {/* Series */}
              <div className="bg-[#6ec4c4] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {match.series}
              </div>
            </div>

            {/* Match Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full shadow-md"
                  src={match.teamLogos[0]}
                  alt="Team 1"
                />
                <p className="text-lg font-bold mx-4">vs</p>
                <img
                  className="h-12 w-12 rounded-full shadow-md"
                  src={match.teamLogos[1]}
                  alt="Team 2"
                />
              </div>
            </div>

            {/* Match Details */}
            <div>
              <p className="text-sm font-semibold text-gray-500">
                {match.match}
              </p>
              <p className="text-sm font-medium text-gray-700 mt-1">
                {match.venue}
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-4">
              <button className="w-full bg-[#6ec4c4] text-white font-semibold py-2 rounded-md hover:bg-[#57a5a5] transition-all">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-700">
        <p className="text-sm">Powered by Cricket Hub | © 2024</p>
      </div>
    </div>
  );
};

export default UpcomingMatches;
