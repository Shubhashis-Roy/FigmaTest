import React from "react";
import "./styles/PageHeader.css";

const PageHeader = () => {
  return (
    <div className="page-header">
      <button className="back-button" style={{ color: "white" }}>
        Back
      </button>
      <h2 className="page-title">Web Designer</h2>
      <p className="mobile-description">
        Your Top 5 local professional matches are below. You can contact any of
        the professionals to get more information using the contact button.
      </p>
      <div className="toggle-buttons">
        <button className="btn active">Your matches</button>
        <button className="btn">Replies</button>
      </div>
    </div>
  );
};

export default PageHeader;
