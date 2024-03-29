import React from "react";
import { useAppSelector, TItem } from "../../../services/types";
import ConstructorItem from "./constructor-item";

const ConstructorList = () => {
  const constructorItems = useAppSelector(
    (state) => state.ingredients.ingredients
  );

  return (
    <>
      {constructorItems.map(function (item: TItem, index: number) {
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
      })}
    </>
  );
};

export default ConstructorList;
