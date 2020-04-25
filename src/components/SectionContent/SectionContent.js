import React from "react";

import Section from "../Section/Section";
import SectionTest from "../Section/SectionTest";

// import { content } from "../../data/content";

const SectionContent = () => (
  <>
    {/* {content.map(item => ( */}
    {/* <div className="section__container">
      <div className="section__content"> */}
    {/* <Section key={item.id} {...item} /> */}
    <Section />
    <SectionTest />
    {/* </div>
    </div> */}
    {/* ))} */}
    <div style={{ height: "2000px" }} />
  </>
);

export default SectionContent;
