import React, { FC, useRef} from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-item.module.css";
import { useDrag, useDrop } from 'react-dnd'
import { TConstructorItem, useDispatch } from "../../../services/types";
import { decreaseItemAction, deleteItemAction, moveItemAction } from "../../../services/actions"

const ConstructorItem: FC<TConstructorItem> = ({ index, id, name, price, thumbnail, uiKey }) => {
    const ref = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const deleteItem = (item:string , uuid: string) => {
        dispatch(deleteItemAction(uuid));
        dispatch(decreaseItemAction(item));
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
        hover(item: any, monitor) {
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
            const hoverClientY = (clientOffset?.y ?? 0) - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            dispatch(moveItemAction(dragIndex, hoverIndex));
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
            text={name}
            price={price}
            thumbnail={thumbnail}
            handleClose={() => deleteItem(id, uiKey)}
          />
        </div>
      </div>
    );
};
  
export default ConstructorItem;