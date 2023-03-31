import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Title already Added!",
      });
    } else {
      Swal.fire("Good job!", "Card Title Is added!", "success");
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
    </div>
  );
};

export default Blogs;
