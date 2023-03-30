import React from "react";

const Sidebar = ({ title, time }) => {
  const getTitle = JSON.parse(localStorage.getItem("title"));
  const getTime = localStorage.getItem("time");
  return (
    <>
      <div className="card bg-light ">
        <h3 className="text-primary p-4">Spent time on read : {getTime} min</h3>
      </div>
      <div className="card bg-light ">
        <h4 className="m-3 p-2 bg-white">{getTitle}</h4>
      </div>
    </>
  );
};

export default Sidebar;
