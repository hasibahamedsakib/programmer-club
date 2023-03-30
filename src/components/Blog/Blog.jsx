import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Blog = ({ blog, handleClick, handleTime }) => {
  return (
    <div className=" mb-5 ps-4 pe-4">
      <img
        src={blog.coverImg}
        alt=""
        className="w-100 card-img-top img-fluid rounded"
        style={{ height: "450px" }}
      />

      <div className="d-flex justify-content-between m-3">
        <img
          style={{ width: "50px", height: "50px", borderRadius: "50px" }}
          src={blog.userProfile}
          alt=""
        />
        <div className="justify-content-start">
          <h5>{blog.author}</h5>
          <p>{blog.publish}</p>
        </div>

        <div>
          <p className="fs-5">
            {blog.read} min read{" "}
            <FontAwesomeIcon
              onClick={() => handleClick(blog.title)}
              icon={faBookmark}
            />
          </p>
        </div>

        {/*  */}
      </div>
      <div className="text-black-50 d-flex fs-5">
        <p>#beginners</p>
        <p className="ms-4">#programming</p>
      </div>
      <h2 className="">{blog.title}</h2>
      <button
        onClick={() => {
          handleTime(blog.read);
        }}
        className="btn btn-link text-start border"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
