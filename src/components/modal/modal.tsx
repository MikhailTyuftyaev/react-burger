import React, { FC, useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { TModal } from '../../utils/types'

const Modal: FC<TModal> = ({ children, header, onClose, isModal }) => {
  const modalRoot = document.getElementById("react-modals") as HTMLElement;

  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", closeModal);
    return () => {
      document.removeEventListener("keydown", closeModal);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      {isModal && (
        <>
          <ModalOverlay onClick={onClose} />
          <div className={`${styles.modal} pt-10 pr-10 pl-10 pb-15`}>
            <div className={styles.modal_header}>
              <p className="text text_type_main-large">
                {header ? header : null}
              </p>
              <CloseIcon type="primary" onClick={onClose} />
            </div>

            {children}
          </div>
        </>
      )}
    </>,
    modalRoot
  );
}
export default Modal;
