import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Restaurant_card = (props) => {
  const { loggedInUser } = useContext(UserContext);

  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, areaName, costForTwo } =
    resData?.info;
  return (
    <div className="restaurant-card m-4 p-1 w-[250px] h-[400px] bg-stone-100	rounded">
      <img
        className="restaurant-img w-[100%] h-[40%] rounded-t"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="bg-black font-bold mb-1 py-1 text-white title">{name}</h3>
      <h5 className="mb-1 text-lg rating-full">
        <i className="text-green-500 fa-solid fa-star rating"></i>
        {avgRating} &nbsp; {resData.info.sla.slaString}
      </h5>
      <div>
        <h5 className=" text-sm">{cuisines.join(", ")}</h5>
      </div>

      <h5>{areaName}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

// higher order component

export const withRecommendedlabel = (Restaurant_card) => {
  return (props) => {
    return (
      <div className="relative ">
        <label className="m-4 p-1 absolute text-white left-[-8] bg-green-400 bg-opacity-60">
          Recommended
        </label>
        <Restaurant_card {...props} />
      </div>
    );
  };
};

export default Restaurant_card;
