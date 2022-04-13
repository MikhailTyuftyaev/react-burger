import React, {useRef} from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-item.module.css";
import { useDispatch} from "react-redux";
import { useDrag, useDrop } from 'react-dnd'
import { DELETE_ITEM, DECREASE_ITEM, MOVE_ITEM } from "../../../services/actions";

const ConstructorItem = ({ index, id, ...props }) => {
    const ref = useRef(null);
    const dispatch = useDispatch();

    const deleteItem = (item, uuid) => {
        dispatch({
          type: DELETE_ITEM,
          uuid,
        });
        dispatch({
          type: DECREASE_ITEM,
          id: item,
        });
    };


    const [{ isDragging }, dragRef] = useDrag({
        type: "movedIngredient",
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [{ handlerId }, dropTarget] = useDrop({
        accept: "movedIngredient",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            dispatch({
                type: MOVE_ITEM,
                dragIndex,
                hoverIndex
            });
            item.index = hoverIndex;
        },
    });

    const opacity = isDragging ? 0 : 1

    dragRef(dropTarget(ref));

    return(
        <div className={styles.constructor_list} ref={ref} style={{opacity}} data-handler-id={handlerId}>
        <div className={`${styles.icon_box} ml-2 `}>
          <DragIcon type="primary" />
        </div>

        <div className={`${styles.element_box} ml-2 pr-2 `}>
          <ConstructorElement
            text={props.name}
            price={props.price}
            thumbnail={props.thumbnail}
            handleClose={() => deleteItem(id, props.uiKey)}
          />
        </div>
      </div>
    );
};

ConstructorItem.propTypes = {
    /** Item index */
    index: PropTypes.number,
    /** Item _id */
    id: PropTypes.string,
  };
  
export default ConstructorItem;