import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const Modal = ({ children, header, onClose, isModal }) => {
  const modalRoot = document.getElementById("react-modals");

  useEffect(() => {
    const closeModal = (e) => {
      if (e.key === "Escape" || e.keyCode === "Escape") {
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

Modal.propTypes = {
  /** Main text in header in modal window*/
  header: PropTypes.string,
  /** Parameter for to do open modal window*/
  isModal: PropTypes.bool.isRequired,
  /** Function for close modal window*/
  onClose: PropTypes.func.isRequired,
};
