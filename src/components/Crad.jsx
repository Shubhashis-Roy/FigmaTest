import React from "react";
import checkIcon from "../assets/Images/greenTick.png";
import arrowIcon from "../assets/Images/arrowRight.png";
import starFilled from "../assets/Images/starIcon.png";
import locationIcon from "../assets/Images/blackLocationIcon.png";
import squareTick from "../assets/Images/squareTick.png";

import "../components/styles/Card.CSS";

export const CompanyCard = ({
  image,
  name,
  distance,
  rating,
  reviews,
  tags,
  description,
  multipleLocations,
}) => {
  return (
    <div className="card-container">
      <img src={image} alt={name} className="company-image" />

      <div className="info-container">
        <div className="header-row">
          <img src={checkIcon} alt="Verified" className="icon" />
          <span className="company-name">{name}</span>
        </div>

        <div className="location-row">
          <img src={locationIcon} alt="location" className="location-icon" />
          <p className="location-text">
            {multipleLocations ? "Multiple Locations" : `${distance} miles away`}
          </p>
        </div>

        <div className="tag-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <p className="description">{description}</p>

        <div className="view-profile">
          View Profile
          <img src={arrowIcon} alt="arrow" className="arrow-icon" />
        </div>
      </div>

      <div className="side-section">
        <div className="rating-section">
          <div className="stars">
            {[...Array(rating)].map((_, i) => (
              <img key={i} src={starFilled} alt="star" className="star-icon" />
            ))}
          </div>
          <span className="review-count">{reviews}</span>
        </div>

        <div className="right-panel">
          <img src={squareTick} alt="check" className="tick-icon" />
          <button className="reply-button">Request reply</button>
        </div>
      </div>
    </div>
  );
};
