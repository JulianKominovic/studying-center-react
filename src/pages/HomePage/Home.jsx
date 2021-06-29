import React, { useState, useEffect } from "react";
import styled from "styled-components";
// URLS
import imgBackground from "../../assets/imgs/bg-colorful.jpg";
import logoUrl from "../../assets/svg/logo.svg";
import logoGithub from "../../assets/svg/github.svg";
import logoLinkedin from "../../assets/svg/linkedin.svg";
//COMPONENTS
import BlurryBackground from "../../components/blurry-bg/BlurryBackground";
import SmallCard from "../../components/small-card/SmallCard";
import BigVerticalCard from "../../components/big-card/BigVerticalCard";
//CALLs TO API
import { getHomeCards } from "../../utils/callToApi";

const Home = () => {
  const HomeSection = styled.main`
    color: black;
    font-family: "Inter", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1100px) {
      height: 100vh;
    }
  `;

  const GridContainer = styled.div`
    display: grid;
    grid-auto-rows: max-content;
    position: relative;
    z-index: 4;
    gap: 2vh;
    margin: 10vw 1em;
    //PARA DESKTOP
    @media screen and (min-width: 1100px) {
      padding: 0 10vw;
      margin: 0;
      grid-template-areas:
        "l0 c r3"
        "l1 c r4"
        "l2 c r5";
      height: min-content;
      gap: 16px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, minmax(min-content, 20vh));
    }
  `;

  const [cardsInfoReady, setCardsInfoReady] = useState([]);
  const apiGetCards = () => {
    getHomeCards().then((json) => setCardsInfoReady(json));
  };

  useEffect(() => {
    apiGetCards();
  }, []);

  const buildCards = () => {
    const alignLeft = -1;
    const alignRight = 1;
    return cardsInfoReady.map((item, index) => {
      //Lets build the half of total cards on one side an the other halt on the opossite side

      if (index <= 2) {
        return (
          <SmallCard {...item} key={item.id} align={"l" + index}></SmallCard>
        );
      }
      return (
        <SmallCard {...item} key={item.id} align={"r" + index}></SmallCard>
      );
    });
  };

  return (
    <HomeSection>
      <GridContainer>
        {buildCards()}
        <BigVerticalCard
          title="Junior Frontend Developer"
          desc="Julian Ezequiel Kominovic"
          imgUrlCircle={logoUrl}
          align="c"
          urlSocial={[{ name: logoGithub }, { name: logoLinkedin }]}
        ></BigVerticalCard>
      </GridContainer>
      <BlurryBackground imgBackgroundUrl={imgBackground} />
    </HomeSection>
  );
};

export default Home;
