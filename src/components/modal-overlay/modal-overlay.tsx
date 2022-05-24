import React, {FC} from "react";
import styles from "./modal-overlay.module.css";
import { TModalOverlay } from "../utils/types";

const ModalOverlay: FC<TModalOverlay> = ({ onClick }) => {
  return <div className={styles.modal_overlay} onClick={onClick}></div>;
};
export default ModalOverlay;
