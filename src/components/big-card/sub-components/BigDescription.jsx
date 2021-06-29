import React from "react";
import styled from "styled-components";

const BigDescription = (props) => {
  const DescComp = styled.p`
    font-weight: 200;
    font-size: clamp(1em, 1vw, 6em);
    margin-top: 10px;
  `;
  const { text } = props;
  return <DescComp>{text}</DescComp>;
};

export default BigDescription;
