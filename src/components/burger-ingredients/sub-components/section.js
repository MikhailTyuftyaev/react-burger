import React from "react";
import PropTypes from "prop-types";

const Section = (({ id, children, sectionRef}) => {
    return (
      <div ref={sectionRef} id={id}>
        {children}
      </div>
    );
  });

  Section.propTypes = {
    /** Section id */
    id: PropTypes.string,
    /** Section ref */
    sectionRef: PropTypes.func,
  };
  

  export default Section;