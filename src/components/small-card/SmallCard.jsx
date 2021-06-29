import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, Route } from "wouter";
//SUB COMPONENTS
import Title from "./sub-components/Title";
import Description from "./sub-components/Description";
import VisualResource from "./sub-components/VisualResource";

//UNIQUE COMPONENTS
const TextSide = styled.div`
  border-right: 1px solid #aaa;
  padding-right: 10px;
  width: 70%;
`;
const Container = styled.article`
  position: relative;
  display: flex;
  background-color: rgba(255, 255, 255, 0.9);
  padding-left: 1.6vw;
  border-radius: 1.4vw;
  justify-content: center;
  align-items: center;
  height: 100%;

  //PARA MOBILE
  @media screen and (max-width: 1100px) {
    border-radius: 20px;
    padding: 0.5em 1em;
  }
`;

const SmallCard = (props) => {
  const [propiedades, setPropiedades] = useState({ ...props });
  console.log(propiedades);
  const PointerLink = styled.a`
    text-decoration: none;
    color: #000;
    height: max-content;
    //PARA DESKTOP
    @media screen and (min-width: 1100px) {
      grid-area: ${propiedades.align};
      height: 100%;
    }
  `;

  return (
    <Link to={propiedades.path}>
      <PointerLink>
        <Container>
          <TextSide>
            <Title text={propiedades.title}></Title>
            <Description text={propiedades.desc}></Description>
          </TextSide>

          <VisualResource text={propiedades.emoji}></VisualResource>
        </Container>
      </PointerLink>
    </Link>
  );
};

export default SmallCard;
