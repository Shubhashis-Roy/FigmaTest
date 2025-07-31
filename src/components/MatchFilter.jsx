import React from "react";
// import "./MatchFilter.css";
import "./styles/MatchFilter.css";

const MatchFilter = () => {
  return (
    <>
      <div className="match-filter">
        {/* Top Filter Bar */}
        <div className="match-filter-top">
          <div className="filter-bar">
            <div className="filter-left">
              <span className="match-count">5 matches</span>{" "}
              {/* This now comes first */}
              <select>
                <option>All ratings</option>
              </select>
              <select>
                <option>All locations</option>
              </select>
              <select>
                <option>All response times</option>
              </select>
            </div>
            <div className="filter-right hide-on-mobile">
              <select>
                <option>Sort by: best match</option>
              </select>
            </div>
          </div>

          {/* Recommendation Box */}
          <div className="recommend-box">
            <div className="recommend-row">
              <span
                className="recommend-text"
                style={{ color: "white", fontSize: "20px", marginTop: "5px" }}
              >
                <strong style={{ color: "rgb(255, 246, 0)" }}>
                  Recommended:
                </strong>{" "}
                Request replies from your{" "}
                <strong
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "22px",
                  }}
                >
                  top 5 matches
                </strong>{" "}
                to hear back faster
              </span>
              <button
                className="btn black-btn web-only"
                style={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                }}
              >
                <p style={{ fontSize: "15px" }}>
                  Request your best matches here
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Orange Button */}
        <div className="orange-btn-wrapper ">
          <button
            className="btn "
            style={{ backgroundColor: "rgb(247, 75, 0)" }}
          >
            Request Your 5 Top Matches Here
          </button>
        </div>
      </div>
    </>
  );
};

export default MatchFilter;
