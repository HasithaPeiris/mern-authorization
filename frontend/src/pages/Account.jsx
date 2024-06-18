import React from "react";

const Account = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-8 text-gray-700 text-center">
          User Profile
        </h2>
        <div className="flex flex-col items-center mb-8">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src="https://via.placeholder.com/150"
            alt="User avatar"
          />
          <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-700">
            Personal Information
          </h4>
          <div className="mt-4">
            <p className="text-gray-600">
              <strong>Username:</strong> johndoe
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +123456789
            </p>
          </div>
        </div>
        <div className="flex justify-around mt-8">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
            Update Account
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
