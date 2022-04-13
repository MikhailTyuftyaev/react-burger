import React from "react";
import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

class ModalOverlay extends React.Component {
  render() {
    return (
      <>
        {this.props.isModal.visible && (
          <div
            className={styles.modal_overlay}
            onClick={this.props.onClick}
          ></div>
        )}
      </>
    );
  }
}
export default ModalOverlay;

ModalOverlay.propTypes = {
  /** Function for close modal window*/
  onClose: PropTypes.func.isRequired,
};
