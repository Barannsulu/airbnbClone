import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
const SearchResult = ({
  img,
  title,
  location,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult_heart" />

      <div className="searchResult_info">
        <div className="searchResult_infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult_infoBottom">
          <div className="searchResult_stars">
            <StarIcon className="searchResult_star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>

          <div className="searchResult_price">
            <h2> {price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
