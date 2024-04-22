import Restaurant_card from "./Restaurant_card";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Skeleton_Loader from "./SkeletonLoader";
import { Link } from "react-router-dom";
const Body = () => {
  //local state variable
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);
  let [searchText, setSearchText] = useState("Hello");
  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6635854&lng=77.4379257&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const response = await data.json();
    console.log(response);
    setListOfRestaurants(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurant(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  console.log(listOfRestaurants);
  //conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Skeleton_Loader />;
  // }
  return listOfRestaurants.length === 0 ? (
    <Skeleton_Loader />
  ) : (
    <div className="body">
      <div className="bodyHeader1">
        <div className="search">
          <input
            type="text"
            className="searchBar"
            value={searchText}
            onChange={(val) => {
              setSearchText(val.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="btn-filter"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              // console.log(filteredRestaurants);

              setFilteredRestaurant(filteredRestaurants);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="btn-filter"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating >= 4.1
              );
              console.log(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated
          </button>

          <button
            className="btn-filter"
            onClick={() => {
              const filteredList2 = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.costForTwo.split(" ")[0].split("₹")[1] <= 200
              );
              console.log(filteredList2);
              setFilteredRestaurant(filteredList2);
            }}
          >
            Lowest Price
          </button>
          <button className="btn-filter">Pure Veg</button>
          <button className="btn-filter">Offers</button>
          <button className="btn-filter">Fast Delivery</button>
        </div>
      </div>

      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {" "}
            <Restaurant_card resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
