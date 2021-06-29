import React from "react";
import styled from "styled-components";

const VisualResource = (props) => {
  const { text } = props;
  const ResourceComp = styled.h1`
    font-size: clamp(2em, 2vw, 10em);
    width: 30%;
    margin: 0;
    text-align: center;
  `;

  return <ResourceComp>{text}</ResourceComp>;
};

export default VisualResource;
