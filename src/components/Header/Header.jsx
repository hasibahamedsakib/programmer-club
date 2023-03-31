import React from "react";

const Header = () => {
  return (
    <>
      <div className="d-md-flex justify-content-between mt-4 mb-4 align-items-center text-center">
        <h2>
          Programming<span className="text-danger fw-bold">Club</span>
        </h2>
        <div className="text-center">
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
            className="d-none d-md-inline-flex"
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
