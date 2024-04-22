import { CDN_URL } from "../utils/constants";

const Restaurant_card = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, areaName, costForTwo } =
    resData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3
        className="title"
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        {name}
      </h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5 className="rating-full">
        <i className="fa-solid fa-star rating"></i>
        {avgRating} &nbsp; {resData.info.sla.slaString}
      </h5>
      <h5>{areaName}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default Restaurant_card;
