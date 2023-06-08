import React from "react";

const LiveStatusCard = () => {
  return (
    <div className="lg-shadow  w-96 h-64  bg-white mr-5 mb-2 ">
      <p className="font-semibold p-5">LiveStatusCard</p>
      <div className="flex">
        <div className="w-1/3">
          <div className=" w-24 h-24 rounded-full border-8 border-gray-300 bg-transparent ml-2 mr-8">
            <p className="m-6 flex items-center  text-2xl text-gray-400">15</p>
          </div>
          <button class="border border-blue-500 text-gray-700 font-bold w-16 rounded ml-6 mt-2">
            <span className="font-normal text-sm pb-1 text-blue-400 ">
              Warnings
            </span>
          </button>
        </div>

        <div className="w-1/3">
          <div className=" w-24 h-24 rounded-full border-8 border-gray-300 bg-transparent ml-2 mr-8 ">
            <p className="m-6 flex items-center  text-2xl text-gray-400">1</p>
          </div>
          <button class="border border-blue-500 text-gray-700 font-bold rounded ml-6 mt-2 px-1 h-6">
            <span className="font-normal text-sm pb-1 text-blue-400 ">
              {" "}
              Errors
            </span>
          </button>
        </div>
        <div className="w-1/3">
          <div className=" w-24 h-24 rounded-full border-8 border-gray-300 bg-transparent ml-2 mr-8">
            <p className="m-6 flex items-center  text-2xl text-gray-400">27</p>
          </div>
          <button class="border border-blue-500 text-gray-700 font-bold w-16 rounded ml-6 mt-2">
            <span className="font-normal text-sm pb-1 text-blue-400 ">
              Info
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveStatusCard;
