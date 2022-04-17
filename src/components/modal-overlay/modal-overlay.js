import React from "react";
import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ onClose }) => {
  return <div className={styles.modal_overlay} onClick={onClose}></div>;
};
export default ModalOverlay;

ModalOverlay.propTypes = {
  /** Function for close modal window*/
  onClose: PropTypes.func,
};
