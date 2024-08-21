import React from "react";
import { Blocks } from "react-loader-spinner";

const HomePage = ({ movies, footerRef }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.title}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-48 object-fill"
                />
                <div className="p-3.5 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                  <p className="text-sm text-gray-500">
                    <strong>Genre:</strong> {movie.genre}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Director:</strong> {movie.director.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Starring:</strong> {movie.stars.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>
                      {movie.language} |{" "}
                      {new Date(movie.releasedDate * 1000).toDateString()}
                    </strong>
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {movie.pageViews} views | Voted by {movie.totalVoted} People
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center">
                      <button className="bg-gray-200 text-gray-800 rounded-full p-2 me-2">
                        &#9650;
                      </button>
                      <span className="font-bold">{movie.voting}</span>
                      <button className="bg-gray-200 text-gray-800 rounded-full p-2 ms-2">
                        &#9660;
                      </button>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                      Watch Trailer
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <Blocks
                height="90vh"
                width="80"
                color="#4fa94d"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
              />
            </div>
          )}
        </div>
      </div>
      <footer
        id="footer"
        ref={footerRef}
        className="bg-gray-800 text-white py-4 px-1 text-center"
      >
        <p>Geeksynergy Technologies Pvt. Ltd.</p>
        <p>Address: Sanjayanagar, Bengaluru-56</p>
        <p>Phone: XXXXXXXXX09</p>
        <p>Email: XXXXXX@gmail.com</p>
        <p>
          Copyright 2024 &copy; Geeksynergy Technologies Pvt. Ltd. All rights
          reserved
        </p>
        <button
          className="top-btn bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          style={{ position: "fixed", right: "10px", bottom: "60px" }}
          onClick={handleScrollToTop}
        >
          &uarr;
        </button>
      </footer>
    </>
  );
};

export default HomePage;
