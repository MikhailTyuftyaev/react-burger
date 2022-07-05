import React, {FC} from "react";
import { Tsection } from "../../../services/types";

const Section: FC<Tsection> = (({ id, children, sectionRef}) => {
    return (
      <div ref={sectionRef} id={id}>
        {children}
      </div>
    );
  });
  

  export default Section;