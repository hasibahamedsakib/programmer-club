import React from "react";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between mt-4 mb-4 align-items-center">
        <h2>Programming Club</h2>
        <div>
          <a
            className="text-decoration-none  me-5 text-dark fs-5 fw-semibold"
            href="/"
          >
            Home
          </a>
          <a
            className="text-decoration-none me-5 text-dark fs-5 fw-semibold"
            href="blog"
          >
            Blog
          </a>
          <a
            className="text-decoration-none me-5 text-dark fs-5 fw-semibold"
            href="/aside"
          >
            Aside
          </a>
          <img
            style={{ width: "50px", height: "50px", borderRadius: "50px" }}
            src="user2.jpg"
            alt=""
          />
        </div>
      </div>
      <hr className="border border-dark-50 border opacity-75 mt-4 mb-4" />
    </>
  );
};

export default Header;
