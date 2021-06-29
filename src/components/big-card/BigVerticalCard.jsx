import React from "react";
import styled from "styled-components";
import BigDescription from "./sub-components/BigDescription";
import BigFooter from "./sub-components/BigFooter";
import BigRoundedImg from "./sub-components/BigRoundedImg";
import BigTitle from "./sub-components/BigTitle";
import BigBrandImage from "./sub-components/BigBrandImage";

const BigVerticalCard = (props) => {
  const { title, desc, imgUrlCircle, align, urlSocial } = props;
  const Container = styled.div`
    border-radius: 20px;
    display: flex;
    padding: 2vw;
    align-items: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.9);
    @media screen and (min-width: 1100px) {
      grid-area: ${align};
      border-radius: 1.4vw;
      display: grid;
      place-items: center;
      row-gap: 1vw;
      grid-auto-rows: max-content;
    }
  `;

  return (
    <Container>
      <BigRoundedImg url={imgUrlCircle}></BigRoundedImg>
      <BigTitle text={title}></BigTitle>
      <BigDescription text={desc} />
      <BigFooter
        childComponents={
          <BigBrandImage
            Urls={urlSocial}
            urlSocialLinks={[
              "https://github.com/JulianKominovic",
              "https://www.linkedin.com/in/jkominovic/",
            ]}
          />
        }
      />
    </Container>
  );
};

export default BigVerticalCard;
