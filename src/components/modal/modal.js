import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

class Modal extends React.Component {
  onKeydown = ({ key }) => {
    switch (key) {
      case "Escape":
        {
          this.props.onClose();
        }
        break;
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  render() {
    const { children, header, onClose } = this.props;

    return ReactDOM.createPortal(
      <>
        {this.props.isModal.visible && (
          <>
            <ModalOverlay isModal={this.props.isModal} onClick={onClose} />
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
}
export default Modal;

Modal.propTypes = {
  /** Main text in header in modal window*/
  header: PropTypes.string.isRequired,
  /** Function for close modal window*/
  onClose: PropTypes.func.isRequired,
};
