import React from "react";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Blogs />
    </div>
  );
};

export default App;
