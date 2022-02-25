import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorList = (props) => {
  return props.data.map(function (item) {
    return (
      <div style={{ display: "flex", alignItems: "center" }} key={item._id}>
        <div className="ml-2" style={{ cursor: "pointer" }}>
          <DragIcon type="primary" />
        </div>

        <div className="ml-2" style={{ width: "100%" }}>
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
