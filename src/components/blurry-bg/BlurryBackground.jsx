import React, { Fragment } from "react";
import "./BlurryBackground.css";

const BlurryBackground = (props) => {
  const { imgBackgroundUrl, imgCircleUrl } = props;

  const defaultCircle = () => {
    return (
      <svg className="background__ball">
        <defs>
          <radialGradient id="MyGradient">
            <stop offset="0%" stopColor="#FF0099" />
            <stop offset="100%" stopColor="rgba(255,61,0,.83)" />
          </radialGradient>
        </defs>
        <circle className="ball-color" cx="50%" cy="50%" r="30%" />
      </svg>
    );
  };

  const imageCircle = () => {
    return <img className="background__circle-img" src={imgCircleUrl}></img>;
  };

  return (
    <Fragment>
      <div className="background__blur"></div>
      {typeof imgCircleUrl === typeof "" ? imageCircle() : defaultCircle()}
      <img src={imgBackgroundUrl} className="background__img"></img>
    </Fragment>
  );
};

export default BlurryBackground;
