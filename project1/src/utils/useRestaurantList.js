import { useEffect, useState } from "react";

const useRestaurantList = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);
  let [searchText, setSearchText] = useState("Hello");
  // console.log(listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6635854&lng=77.4379257&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const response = await data.json();
      // console.log(response);

      setListOfRestaurants(
        response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilteredRestaurant(
        response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("error fetching restaurant data " + error);
    }
  };
  // console.log("listofRestaurants 2");
  // console.log(listOfRestaurants);

  return {
    listOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
    searchText,
    setSearchText,
  };
};

export default useRestaurantList;
