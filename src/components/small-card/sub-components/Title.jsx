import React from "react";
import styled from "styled-components";

const Title = (props) => {
  const TitleComp = styled.h1`
    font-weight: 600;
    font-size: clamp(1.2em, 2vw, 8em);
    margin: 0;
  `;
  const { text } = props;
  return <TitleComp>{text}</TitleComp>;
};

export default Title;
