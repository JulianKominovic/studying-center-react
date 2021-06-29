import React from "react";
import styled from "styled-components";

const BigRoundedImg = (props) => {
  const RoundedComp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    height: 40vw;
    width: 40vw;
    @media screen and (min-width: 1100px) {
      height: 16vw;
      width: 16vw;
    }
  `;
  const ImgComp = styled.img`
    width: 60%;
    margin-left: 8px;
  `;
  const { url } = props;
  return (
    <RoundedComp>
      <ImgComp src={url}></ImgComp>
    </RoundedComp>
  );
};

export default BigRoundedImg;
