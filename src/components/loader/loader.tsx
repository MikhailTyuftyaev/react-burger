import React from "react";
import ReactDOM from "react-dom";
import styles from "./loader.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

const Loader = ({}) => {
const modalRoot = document.getElementById("react-loader") as HTMLElement;
const onClose = () =>{
    return false;
}

return ReactDOM.createPortal(
    <>
    <ModalOverlay onClick={onClose}/>
    <div className={`${styles.loader_box}`}>
        <div className={`${styles.loader}`}>
          <Logo/>
        </div>
      </div>
    </>,
    modalRoot
  )
};
export default Loader;