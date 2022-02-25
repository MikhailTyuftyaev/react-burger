import React from "react";
import BurgerItem from "./item-burger";

const BurgerList = (props) => {
  return props.data.map(function (item) {
    return (
      <BurgerItem
        title={item.name}
        key={item._id}
        image={item.image}
        price={item.price}
      />
    );
  });
};
export default BurgerList;
