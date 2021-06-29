import React from "react";
import styled from "styled-components";

const BigBrandImage = (props) => {
  const BigBrandsLogo = styled.img`
    height: 100%;
  `;
  const { Urls, urlSocialLinks } = props;

  const LinkComponent = styled.a`
    height: 100%;
  `;

  return Urls.map((item, index) => {
    return typeof urlSocialLinks !== typeof undefined ? (
      <LinkComponent
        key={index + 100}
        href={urlSocialLinks[index]}
        target="_blank"
      >
        <BigBrandsLogo key={index + 83} src={item.name} />
      </LinkComponent>
    ) : (
      <BigBrandsLogo key={index + 83} src={item.name} />
    );
  });
};

export default BigBrandImage;
