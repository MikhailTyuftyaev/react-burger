import React from "react";
import PropTypes from "prop-types";
import BurgerItem from "./item-burger";
import { nanoid } from 'nanoid'

const BurgerList = ({ ...props }) => {
  return props.data.map(function (item) {
    return (
      <BurgerItem
        title={item.name}
        key={nanoid()}
        id={item._id}
        image={item.image}
        price={item.price}
        imageLarge={item.image_large}
        calories={item.calories}
        proteins={item.proteins}
        fat={item.fat}
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
