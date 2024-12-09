import React from "react";

const NewsPage = () => {
  const newsArticles = [
    {
      title: "India vs Australia: Thrilling Finish to Test Series",
      image:
        "https://images.pexels.com/photos/1595267/pexels-photo-1595267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "Dec 9, 2024",
      description:
        "India clinched a dramatic win against Australia in the final Test match, with R. Sharma scoring a brilliant century.",
      category: "Cricket",
    },
    {
      title: "England Announces Squad for World Cup 2024",
      image:
        "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "Dec 8, 2024",
      description:
        "England has announced its 15-man squad for the upcoming Cricket World Cup, including some surprising picks.",
      category: "World Cup",
    },
    {
      title: "Women's Cricket: South Africa Defeats New Zealand",
      image:
        "https://images.pexels.com/photos/159494/pexels-photo-159494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "Dec 7, 2024",
      description:
        "South Africa emerged victorious in a close ODI match against New Zealand, led by M. du Plessis' all-round performance.",
      category: "Women's Cricket",
    },
    {
      title: "BCCI Reveals IPL Schedule for 2024 Season",
      image:
        "https://images.pexels.com/photos/209874/pexels-photo-209874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "Dec 6, 2024",
      description:
        "The IPL 2024 schedule has been released, with exciting matches lined up for fans worldwide. The opening match features CSK vs MI.",
      category: "IPL",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-4xl font-bold text-[#6ec4c4]">Cricket News</h1>
        <p className="text-lg text-gray-600 mt-2">
          Stay updated with the latest news and stories from the cricketing
          world.
        </p>
      </div>

      {/* News Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-6">
        {newsArticles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Image */}
            <div className="flex justify-center items-center bg-gray-200">
              <img
                className="w-full h-56 object-cover"
                src={article.image}
                alt={article.title}
              />
            </div>
            {/* Content */}
            <div className="p-4">
              <p className="text-sm text-gray-500">{article.date}</p>
              <h2 className="text-xl font-bold text-gray-800 mt-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {article.description}
              </p>
              {/* Category */}
              <div className="mt-4">
                <span className="bg-[#6ec4c4] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-500">
        <p className="text-sm">Powered by Cricket News Hub | © 2024</p>
      </div>
    </div>
  );
};

export default NewsPage;
