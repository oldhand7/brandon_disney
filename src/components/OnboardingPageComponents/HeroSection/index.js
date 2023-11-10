import React, { useState } from "react";
// import Video from "../../../videos/Video.mp4";
import { Button } from "../../ButtonElement";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  // VideoBg,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => setHover(!hover);

  return (
    <HeroContainer id="home">
      <HeroBg>
        <img src="./back.webp" width="100%" />
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>Join Us!</HeroH1>
        <HeroP>Apply for a free account and Join us right away!</HeroP>
        <HeroBtnWrapper>
          <Button
            to="/"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          {/* <Button
            to="/applicant/home"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
