import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleClick = (title) => {
    setTitle(title);

    const getTitle = JSON.parse(localStorage.getItem("title"));
    if (getTitle) {
      console.log("ache");
    } else {
      localStorage.setItem("title", JSON.stringify(title));
    }
  };

  const handleTime = (time) => {
    const getPrevTime = localStorage.getItem("time");
    if (getPrevTime) {
      let newTime = +getPrevTime + time;
      localStorage.setItem("time", newTime);
      setTime(newTime);
    } else {
      localStorage.setItem("time", time);
      setTime(time);
    }
  };

  return (
    <div className="d-md-flex">
      <div className="col-md-8 col-12">
        {blogs.map((blog) => (
          <Blog
            blog={blog}
            key={blog.id}
            handleClick={handleClick}
            handleTime={handleTime}
          />
        ))}
      </div>
      <div className="col-md-4 col-12">
        <Sidebar title={title} time={time} />
      </div>
    </div>
  );
};

export default Blogs;
