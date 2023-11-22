import React, { useState } from "react";
import Video from "../../../videos/bg.mp4";
import { Button } from "../../ButtonElement";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroHeader,
  HeroP,
  HeroSpan,
  VideoBg,
} from "./HeroElements";
import { NavLinks } from "../Navbar/NavbarElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => setHover(!hover);

  return (
    <HeroContainer id="home" style={{ height: "100vh" }}>
      <HeroBg>
        {/* <img src="./back.webp" width="100%" /> */}
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
          height={"100vh"}
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <span style={{ color: "red" }}>Changing media</span>, one project at a
          time
        </HeroH1>
        <HeroP>
          Our goal at VarietySplash is to distribute media that change viewers
        </HeroP>
        <HeroBtnWrapper>
          <NavLinks
            to="apply"
            smooth={true}
            duration={500}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            spy={true}
            exact="true"
            style={{ fontSize: "24px" }}
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            {/* </Button> */}
          </NavLinks>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
