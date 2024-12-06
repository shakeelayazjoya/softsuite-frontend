import React from "react";

const MultiFormOne = () => {
  return (
    <div className="p-4">
      {" "}
      <div className="flex items-center space-x-4">
        {/* Text Display */}
        <p className="w-1/2 text-sm font-medium text-gray-900">
          1. My name is Shakeel and I am a developer
        </p>

        {/* Input Form */}
        <input
          type="text"
          placeholder="Enter something"
          className="w-1/2 block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
        />
      </div>
      <div className="flex items-center space-x-4 pt-3">
        {/* Input Form */}
        <input
          type="text"
          placeholder="Enter something"
          className="w-1/2 block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
        />{" "}
        <label htmlFor="">im</label>
        <input type="text" className=" p-2 border" placeholder="enter here" />
        {/* Text Display */}
        <p className="w-1/2 text-sm font-medium text-gray-900">
          My name is Shakeel and I am a developer
        </p>
      </div>
      {/* this is second part*/}
      <div className="p-4 flex space-x-4 items-center">
        <div className="flex items-center space-x-2">
          <label
            htmlFor="sie-umfasst"
            className="text-sm font-medium text-gray-900"
          >
            Sie umfasst
          </label>
          <input
            type="text"
            id="sie-umfasst"
            placeholder="text"
            className="w-1/4 block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
          />
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="zimmer" className="text-sm font-medium text-gray-900">
            Zimmer
          </label>
          <input
            type="text"
            id="zimmer"
            placeholder="text"
            className="w-1/4 block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
          />
        </div>

        <div className="flex items-center space-x-2">
          <label
            htmlFor="raumart"
            className="text-sm font-medium text-gray-900"
          >
            Raumart
          </label>
          <input
            type="text"
            id="raumart"
            placeholder="text"
            className="w-1/4 block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiFormOne;
