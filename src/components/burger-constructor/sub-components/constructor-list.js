import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorList = ({ ...props }) => {
  return props.data.map(function (item, index) {
    return (
      <div style={{ display: "flex", alignItems: "center" }} key={index}>
        <div className="ml-2" style={{ cursor: "pointer" }}>
          <DragIcon type="primary" />
        </div>

        <div className="ml-2 pr-8" style={{ width: "100%" }}>
          <ConstructorElement
            text={item.name}
            price={item.price}
            thumbnail={item.image_mobile}
          />
        </div>
      </div>
    );
  });
};

export default ConstructorList;
