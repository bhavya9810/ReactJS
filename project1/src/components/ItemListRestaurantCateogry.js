import { Fragment } from "react";
import { CDN_URL, VEG_SYMBOL, NON_VEG_SYMBOL } from "../utils/constants";

const ItemListRestaurantCateogry = ({ itemData, dummy2 }) => {
  console.log(itemData);
  console.log("inside itemList", dummy2);
  return (
    <div>
      <div>
        {itemData.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 pb-12 m-2  border-b-2 flex"
          >
            <div className="w-9/12">
              <div className="w-6 h-6 flex gap-2 items-center relative">
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <img className="w-full h-full" src={VEG_SYMBOL}></img>
                ) : (
                  <img className="w-full h-full" src={NON_VEG_SYMBOL}></img>
                )}{" "}
                {item?.card?.info?.isBestseller ? (
                  <span className="text-red-500 font-extrabold underline text-md">
                    BestSeller
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="font-bold">{item?.card?.info?.name}</div>
              <div>{item?.card?.info?.description}</div>
              <div>
                ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </div>

              <div>
                {item?.card?.info?.ratings?.aggregatedRating?.rating > 0 ? (
                  <Fragment>
                    {" "}
                    <span>
                      {item?.card?.info?.ratings?.aggregatedRating?.rating} (
                      {
                        item?.card?.info?.ratings?.aggregatedRating
                          ?.ratingCountV2
                      }
                      )
                    </span>
                  </Fragment>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            <div className="w-3/12">
              <div className="absolute pt-4 w-3/12">
                {" "}
                <button className="bg-white font-bold text-xl text-green-600 border rounded-md w-28 p-1 mx-4 mt-28 cursor-pointer">
                  ADD
                </button>
              </div>
              <div className="w-36 h-36 rounded-md">
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt="Badge"
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>

            {/* <img src={CDN_URL+}></img> */}
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListRestaurantCateogry;
