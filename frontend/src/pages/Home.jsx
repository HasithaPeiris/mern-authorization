import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <img
          className="w-68 h-68 mx-auto"
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHB2Zzc2eTRnMHFoZDFhZ2tjYmJkZ2tvcGhnMmFsOTl4ZmxwMHA1eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l378bC3TlAEMVk2oU/giphy.gif"
          alt="Welcome GIF"
        />
        <h2 className="text-2xl font-bold mb-8 text-gray-700">
          Welcome to Our Platform
        </h2>
        <div className="flex justify-around">
          <Link to="/login">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
