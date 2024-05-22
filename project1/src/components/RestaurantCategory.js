import { useState } from "react";
import ItemListRestaurantCateogry from "./ItemListRestaurantCateogry";

const RestaurantCategory = (props) => {
  // const [showItems, setShowItems] = useState(false);
  console.log(props);
  const { data, showItems, setShowIndex, dummy1 } = props;
  console.log(data);
  // console.log(dummy1);
  // console.log("showItems", showItems);
  // console.log("setShowIndex", setShowIndex);
  const handleClick = () => {
    setShowIndex();
    // console.log(setShowIndex(index));
  };

  // console.log("handleClick", handleClick);
  return (
    <div>
      {/* {accordian header} */}
      {/* RestaurantCategory :{data} */}
      <div className="w-[52%]  mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          {" "}
          <span className="font-extrabold text-2xl">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
        {/* {showItems ? (
          <ItemListRestaurantCateogry itemData={data.itemCards} />
        ) : (
          <span></span>
        )} */}
        {showItems && (
          <ItemListRestaurantCateogry
            itemData={data.itemCards}
            dummy2={dummy1}
          />
        )}
      </div>
      <div className="bg-gray-200 w-[55%] h-4 mx-auto"></div>
      {/* {accordian body} */}
    </div>
  );
};

export default RestaurantCategory;
