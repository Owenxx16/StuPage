import React from "react";
import "./SeeAllButton.css";

const SeeAllButton = ({ text = "Xem tất cả", onClick }) => {
    return (
        <div className="see-all-button" onClick={onClick}>
            <span className="plus-box">+</span>
            <span className="see-all-text">{text}</span>
        </div>
    );
};

export default SeeAllButton;
