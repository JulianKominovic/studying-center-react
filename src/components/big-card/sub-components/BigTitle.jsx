import React from "react";
import styled from "styled-components";

const BigTitle = (props) => {
  const Titlecomp = styled.p`
    font-weight: 600;
    font-size: clamp(1.4em, 2vw, 200px);
    text-align: center;
    margin-bottom: 0;
  `;
  const { text } = props;
  return <Titlecomp>{text}</Titlecomp>;
};

export default BigTitle;
