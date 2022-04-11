import React, { forwardRef } from "react";

const Section = forwardRef(({ id, children }, ref) => {
    return (
      <div ref={ref} id={id}>
        {children}
      </div>
    );
  });

  export default Section;