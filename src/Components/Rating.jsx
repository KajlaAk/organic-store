import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ value, handleRating, id, color }) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < value) {
        stars.push(
          <FaStar
            onClick={() => handleRating(id, i + 1)}
            key={i}
            style={{ cursor: "pointer", color: color }}
          />
        );
      } else {
        stars.push(
          <FaRegStar
            onClick={() => handleRating(id, i + 1)}
            key={i}
            style={{ cursor: "pointer", color: color }}
          />
        );
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

Rating.defaultProps = {
  color: "#FFD700",
};

export default Rating;
