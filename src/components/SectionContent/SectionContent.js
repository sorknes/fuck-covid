import React from "react";

import Section from "../Section/Section";

import { content } from "../../data/content";

const SectionContent = () => (
  <>
    {content.map(item => (
      <div className="section__container">
        <div className="section__content">
          <Section key={item.id} {...item} />
        </div>
      </div>
    ))}
    <div style={{ height: "2000px" }} />
  </>
);

export default SectionContent;
