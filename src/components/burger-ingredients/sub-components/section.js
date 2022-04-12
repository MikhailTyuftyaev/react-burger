import React from "react";

const Section = (({ id, children, sectionRef}) => {
    return (
      <div ref={sectionRef} id={id}>
        {children}
      </div>
    );
  });

  export default Section;