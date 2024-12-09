import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="bg-[#6ec4c4] text-white w-full py-8 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-2">
          Your one-stop destination for all cricketing updates!
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mt-10 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-[#6ec4c4] mb-4">
          Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to our platform, where cricket meets passion. We provide
          real-time cricket scores, insightful match analyses, and the latest
          news from the cricketing world. Whether you are a casual fan or a
          die-hard cricket enthusiast, our platform is tailored to keep you
          updated on all things cricket.
        </p>

        <h2 className="text-2xl font-semibold text-[#6ec4c4] mt-6 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to make cricket accessible to everyone. From
          international tournaments to domestic leagues, we strive to provide
          comprehensive coverage. We aim to connect fans globally and foster a
          community that celebrates the spirit of the game.
        </p>

        <h2 className="text-2xl font-semibold text-[#6ec4c4] mt-6 mb-4">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Accurate and real-time cricket scores.</li>
          <li>Detailed match statistics and player profiles.</li>
          <li>Exclusive interviews, articles, and news updates.</li>
          <li>User-friendly interface with a sleek design.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#6ec4c4] mt-6 mb-4">
          Join Us
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Be a part of our cricketing journey. Follow us for the latest updates
          and become a member of our ever-growing cricket community. Together,
          let's celebrate the sport that unites millions around the globe.
        </p>
      </div>

      {/* Footer */}
      <div className="w-full bg-gray-100 text-center py-4 mt-10 border-t border-gray-300">
        <p className="text-gray-600">
          &copy; 2024 Your Cricket Website | All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default About;
