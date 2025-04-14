import React, { useState } from "react";
import "./Header2.css";
import stuLogo from "../../assets/logo1.png";
import ceaLogo from "../../assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import stuCode from "../../assets/stuCode.png";
import { Link, useNavigate } from "react-router-dom";

const Header2 = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      navigate(`/news?search=${encodeURIComponent(searchText.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="H2_container">
      <div className="column-1">
        <Link to={"/"}>
          <img src={stuLogo} alt="logo" />
        </Link>
      </div>
      <div className="column-2">
        <img src={ceaLogo} alt="cea" />
      </div>
      <div className="column-3">
        <div className="search_container">
          <input
            type="text"
            className="input_search"
            placeholder="Gõ thông tin cần tìm"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="icon_search"
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="stuCode_container">
          <span style={{ paddingRight: "10px", width: "min-content" }}>
            Mã Trường
          </span>
          <img src={stuCode} alt="stu code" />
        </div>
      </div>
    </div>
  );
};

export default Header2;
