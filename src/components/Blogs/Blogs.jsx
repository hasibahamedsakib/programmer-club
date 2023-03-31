import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [myTitle, setTitle] = useState([]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleClick = (cart) => {
    const { title, id } = cart;

    let findTitle = myTitle.find((pt) => pt == title);

    if (findTitle) {
      toast.error("🦄 This Card Already Bookmarked!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("🦄 Wow! Bookmark Add successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      let allTitle = [...myTitle, title];
      setTitle(allTitle);
    }
    // console.log(al);
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
        <Sidebar title={myTitle} time={time} />
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Blogs;
