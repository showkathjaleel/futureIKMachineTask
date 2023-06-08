import React from "react";
const GeneralInfo = [
  { field: "Projects", data: "02/10" },
  { field: "Users", data: "03/03" },
  { field: "Channels", data: "10/10" },
  { field: "Devices", data: "05/10" },
];
const GeneralInfoCard = () => {
  return (
    <div className="lg-shadow  bg-blue-500 p-4 mr-5 mb-2  w-96 h-64">
      <p className="font-semibold">General inforamtion</p>

      <div className="flex mt-3">
        <p className="text-gray-300 flex ">Projects</p>
        <div className="bg-gray-300 w-2/3 h-4 ml-4 mt-1 rounded-full ">
          <div className="bg-blue-500 w-24 h-4  rounded-full"></div>
        </div>
        <p className="text-gray-300 ml-4 ">02/10</p>
      </div>

      <div className="flex mt-3">
        <p className="text-gray-300">Users</p>
        <div className="bg-gray-300 w-2/3 h-4 ml-8 mt-1 rounded-full ">
          <div className="bg-green-600 w-24 h-4  rounded-full"></div>
        </div>
        <p className="text-gray-300 ml-4">03/03</p>
      </div>
      <div className="flex mt-3 ">
        <p className="text-gray-300">Channels</p>
        <div className="bg-gray-300 w-2/3 h-4 ml-2 mt-1 rounded-full ">
          <div className="bg-red-500 w-24 h-4  rounded-full"></div>
        </div>
        <p className="text-gray-300 ml-4">10/10</p>
      </div>
      <div className="flex mt-3">
        <p className="text-gray-300">Devices</p>
        <div className="bg-gray-300 w-2/3 h-4 ml-5 mt-1 rounded-full ">
          <div className="bg-blue-950 w-24 h-4  rounded-full"></div>
        </div>
        <p className="text-gray-300 ml-4">05/10</p>
      </div>
    </div>
  );
};

export default GeneralInfoCard;
