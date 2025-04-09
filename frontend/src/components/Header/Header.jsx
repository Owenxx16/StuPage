import React from "react";
import './Header.css'
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
const Header = () => {
  return (
    <>
      <div className="Header-container">
        
          <Header1/>
          <Header2/>
          <Header3 />
      </div>
    </>
  );
}

export default Header;
