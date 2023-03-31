import React, { useEffect, useState } from "react";

const Sidebar = ({ title, time }) => {
  const [totalTime, setTotalTime] = useState(time);
  const [getTitle, setGetTitle] = useState(title);
  useEffect(() => {
    const getTime = localStorage.getItem("time");

    setTotalTime(getTime);
  }, [time, title]);
  return (
    <div className="sticky-md-top">
      <div className="card bg-light mb-4">
        <h3 className="text-primary p-4">
          Spent time on read : {totalTime || 0} min
        </h3>
      </div>
      <div className="card bg-light ">
        <h3 className="m-3 p-2 ">Bookmarked Blogs : {title?.length}</h3>
        {title.map((title, inx) => (
          <h4 key={inx} className="m-3 p-3 bg-white shadow-sm ">
            {title}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
