import React from "react";
import {useSelector } from "react-redux";
import ConstructorItem from "./constructor-item"

const ConstructorList = ({ ...props }) => {
  const constructorItems = useSelector(
    (state) => state.ingredients.ingredients
  );

  return constructorItems.map(function (item, index) {
    return (
      <ConstructorItem 
        index={index}
        id={item._id}
        key={item.uuid}
        uiKey={item.uuid}
        name={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
      />
    );
  });
};

export default ConstructorList;
