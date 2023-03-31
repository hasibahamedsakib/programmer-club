import React from "react";
import Blogs from "./components/Blogs/Blogs";
import FAQ from "./components/FAQ/FAQ";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Blogs />
      <FAQ />
    </div>
  );
};

export default App;
