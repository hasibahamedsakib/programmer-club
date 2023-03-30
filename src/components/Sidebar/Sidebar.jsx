import React from "react";

const Sidebar = ({ title }) => {
  const getTitle = JSON.parse(localStorage.getItem("title"));
  return (
    <div className="card bg-light ">
      <h4 className="m-3 p-2 bg-white">{getTitle}</h4>
    </div>
  );
};

export default Sidebar;
