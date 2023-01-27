import React from "react";
import ResponsiveNavbar from "./Navbar.js";
import Content from "./Content.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="">
      <ResponsiveNavbar />
      <div className="">
        <Header />
        <Content />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
