import Restaurant_card from "./Restaurant_card";
import { useEffect, useState, useContext } from "react";
import Skeleton_Loader from "./SkeletonLoader";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withRecommendedlabel } from "./Restaurant_card";
import UserContext from "../utils/UserContext";
const Body = () => {
  //local state variable
  const {
    listOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
    searchText,
    setSearchText,
  } = useRestaurantList();

  const Restaurant_Card_Recommended = withRecommendedlabel(Restaurant_card);
  // let [listOfRestaurants, setListOfRestaurants] = useState([]);
  // let [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // let [searchText, setSearchText] = useState("Hello");
  // console.log(listOfRestaurants);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6635854&lng=77.4379257&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const response = await data.json();
  //   console.log(response);
  //   setListOfRestaurants(
  //     response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );

  //   setFilteredRestaurant(
  //     response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };
  // console.log("listOfRestaurants");
  // console.log(listOfRestaurants);
  // //conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Skeleton_Loader />;
  // }
  const { loggedInUser, setUserInfoName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline !! Please check your internet connection
      </h1>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Skeleton_Loader />
  ) : (
    <div className="body">
      <div className="flex max-w-screen-lg mx-auto bodyHeader1 my-12 gap-6">
        <div className="flex gap-2 search">
          <input
            type="text"
            className="border-2 border-solid border-black rounded focus:border-red searchBar"
            value={searchText}
            onChange={(val) => {
              setSearchText(val.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="btn-filter border-2 border-black bg-black rounded text-white p-1"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              // console.log(filteredRestaurants);

              setFilteredRestaurant(filteredRestaurants);
              // console.log(searchText);
            }}
          >
            Search
          </button>
          <label className="border-2 border-black bg-black rounded text-white p-1">
            UserName
          </label>
          <input
            type="text"
            className="border-2 border-solid border-black rounded focus:border-red searchBar"
            value={loggedInUser}
            onChange={(val) => setUserInfoName(val.target.value)}
          ></input>
        </div>
        <div className=" flex filter">
          <button
            className="btn-filter px-4 mx-2 border-2 border-black bg-black rounded text-white p-1"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating >= 4.1
              );
              // console.log(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated
          </button>

          <button
            className="btn-filter px-4 mx-2 border-2 border-black bg-black rounded text-white p-1"
            onClick={() => {
              const filteredList2 = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.costForTwo.split(" ")[0].split("₹")[1] <= 200
              );
              // console.log(filteredList2);
              setFilteredRestaurant(filteredList2);
            }}
          >
            Lowest Price
          </button>
          <button className="btn-filter mx-2 px-4 border-2 border-black bg-black rounded text-white p-1">
            Pure Veg
          </button>
          <button className="btn-filter px-4 mx-2 border-2 border-black bg-black rounded text-white p-1">
            Offers
          </button>
          <button className="btn-filter px-4 mx-2 border-2 border-black bg-black rounded text-white p-1">
            Fast Delivery
          </button>
        </div>
      </div>

      <div className="restaurant-container flex flex-wrap	mx-auto">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant?.info?.totalRatingsString.split("K")[0].split("+")[0] >
            5 ? (
              <div className="hover:scale-95 transition-transform duration-300">
                <Restaurant_Card_Recommended resData={restaurant} />
              </div>
            ) : (
              <div className="hover:scale-95 transition-transform duration-300">
                <Restaurant_card resData={restaurant} />
              </div>
            )}
            {/* <Restaurant_card resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
