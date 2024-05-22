import Skeleton_Loader from "./SkeletonLoader";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const handleSetShowIndex = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const params = useParams();
  console.log("params are");
  console.log(params);
  const dummy = "dummy data";
  const restaurantInfo = useRestaurantMenu(params);
  if (restaurantInfo === null) return <Skeleton_Loader />;

  console.log(restaurantInfo);
  const {
    name,
    avgRatingString,
    costForTwoMessage,
    totalRatingsString,
    cuisines,
  } = restaurantInfo?.cards[2]?.card?.card?.info;

  const { imageId } =
    restaurantInfo?.cards[2]?.card?.card?.info?.expectationNotifiers?.[0]?.icon;

  const { text } =
    restaurantInfo?.cards[2]?.card?.card?.info?.expectationNotifiers?.[0];
  console.log(text);

  cuisines.join(",");
  console.log("hi", restaurantInfo?.cards[2]?.card?.card?.info);

  console.log("delivery image", imageId);
  console.log(CDN_URL + imageId);

  const { title } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log("title", title);
  console.log(
    "regular",
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
  );

  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log("categories are", categories);

  console.log(itemCards);
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-extrabold leading-7	 text-4xl	mb-7">{name}</h1>

        <div className="bg w-[55%] h-[189px] border rounded-[20px] pt-[20px]">
          {" "}
          <div className="flex mx-4 font-bold text-xl">
            <div className="relative rounded-full px-1">
              {" "}
              <div className="text-green-700">
                <i class="fa-solid fa-circle"></i>
              </div>
              <div className="absolute top-[0] text-white left-[5px]">
                <i class="fa-xs fa-solid fa-star"></i>
              </div>
            </div>
            Rating : {avgRatingString} ({totalRatingsString}) .{" "}
            {costForTwoMessage}
          </div>
          <h2 className="underline	text-orange-600	font-bold tracking-wide  mx-4 	">
            {" "}
            {cuisines.join(", ")}{" "}
          </h2>
          {/* <img className="restaurant-img" src=""></img> */}
          <div className="flex items-center gap-4 mx-4 mt-3 relative">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-slate-300 border rounded-full  w-2 h-2"></div>
              <div className="bg-slate-300 broder w-[2px] h-7"></div>
              <div className="bg-slate-300 border rounded-full  w-2 h-2"></div>
            </div>
            <div className="absolute left-7 bottom-0 ">
              <div className="flex gap-3 text-lg">
                <div className="font-bold ">Outlet</div>
                <div>
                  {restaurantInfo?.cards[2]?.card?.card?.info.areaName}
                  <span className="text-orange-600">
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </div>
              </div>
              <div className="font-bold pt-2">
                {" "}
                {restaurantInfo?.cards[2]?.card?.card?.info?.sla?.slaString}
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-slate-200 mt-5"></div>
          <div className="flex mx-4 my-3">
            <img className="w-6 h-6" src={CDN_URL + imageId}></img>
            <div>
              {
                restaurantInfo?.cards[2]?.card?.card?.info
                  ?.expectationNotifiers?.[0]?.text
              }
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => handleSetShowIndex(index)}
            dummy1={dummy}
          />
        ))}
      </div>

      {/* <h2>
        {title} ({itemCards.length})
      </h2> */}
      <br></br>

      {/* <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - ₹{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
