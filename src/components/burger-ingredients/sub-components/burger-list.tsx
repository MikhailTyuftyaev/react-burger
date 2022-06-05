import React from "react";
import PropTypes from "prop-types";
import BurgerItem from "./item-burger";
import { TItem } from "../../utils/types";

const BurgerList = ({ ...props }) => {
  return props.data.map(function (item: TItem) {
    return (
      <BurgerItem
        title={item.name}
        key={item._id}
        id={item._id}
        item={item}
        image={item.image}
        price={item.price}
        imageLarge={item.image_large}
        calories={item.calories}
        proteins={item.proteins}
        fat={item.fat}
        count={item.__v}
        carbohydrates={item.carbohydrates}
      />
    );
  });
};

BurgerList.propTypes = {
  /** Main data */
  data: PropTypes.array,
};

export default BurgerList;
