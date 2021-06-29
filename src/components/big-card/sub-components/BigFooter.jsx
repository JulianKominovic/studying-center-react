import React from "react";
import styled from "styled-components";

const BigFooter = (props) => {
  const Footer = styled.footer`
    display: flex;
    width: 100%;
    height: 70px;
    margin: 2em 0;
    justify-content: center;
    gap: clamp(1em, 7vw, 50px);
    align-items: center;
    flex-wrap: wrap;
  `;

  const { childComponents } = props;
  return <Footer>{childComponents}</Footer>;
};

export default BigFooter;
