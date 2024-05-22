import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./constants";
const useRestaurantMenu = (params) => {
  console.log("using custom hooks");
  let [restaurantInfo, setRestaurantMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + params.resId);
    console.log(RESTAURANT_MENU_URL + params.resId);

    const response = await data.json();
    console.log(response);
    setRestaurantMenu(response?.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
