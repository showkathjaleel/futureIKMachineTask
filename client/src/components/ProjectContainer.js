import React from "react";
const menus = [
  { field: "Addidas Mobile", data: "" },
  { field: "Campaigns", data: "8" },
  { field: "Channels", data: "9/10" },
  { field: "Last edited by", data: "varun" },
  { field: "Last edited on", data: "5 hours ago" },
];

const ProjectContainer = () => {
  return (
    <div className="h-16 shadow-lg bg-white  mx-5">
      <div className="flex ">
        {menus.map((menu, index) => (
          <>
          <div className="mt-2 pl-5  pr-32">
            <div className="">{menu.field} </div>
            <div className="text-sm">{menu.data}</ div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
