import { useEffect, useState } from "react";
import Skeleton_Loader from "./SkeletonLoader";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  let [restaurantInfo, setRestaurantMenu] = useState(null);

  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + params.resId);
    console.log(RESTAURANT_MENU_URL + params.resId);
    const response = await data.json();
    console.log(response);

    setRestaurantMenu(response?.data);
  };

  if (restaurantInfo === null) return <Skeleton_Loader />;

  console.log(restaurantInfo);
  const { name, avgRatingString, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const { title } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(title);

  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h2>Rating : {avgRatingString}</h2>
      {/* <img className="restaurant-img" src=""></img> */}
      <br></br>

      <h4>
        Delivery Time :
        {restaurantInfo?.cards[2]?.card?.card?.info?.sla?.slaString}
      </h4>
      <h5>Cost For Two : {costForTwoMessage}</h5>
      <br></br>
      <h2>
        {title} ({itemCards.length})
      </h2>
      <br></br>

      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - ₹{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
