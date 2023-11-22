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
  HeroP,
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
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
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
        <div style={{ color: "white", fontSize: "32px", marginTop: "15vh" }}>
          Our Audience
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="col-md-4"
            style={{
              width: "150px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#d3d3d36b",
              marginLeft: "30px",

              borderRadius: "8px",
              padding: "12px 16px",
            }}
          >
            <span
              style={{
                fontSize: "32px",
                alignItems: "center",
                color: "lightblue",
              }}
            >
              <b>50M</b>
            </span>
            <span style={{ color: "white" }}>monthly views</span>
          </div>
          <div
            className="col-md-4"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "150px",
              background: "#d3d3d36b",
              marginLeft: "30px",

              borderRadius: "8px",
              padding: "12px 16px",
            }}
          >
            <span
              style={{
                fontSize: "32px",
                color: "lightblue",
              }}
            >
              <b>4M</b>
            </span>
            <span style={{ color: "white" }}>subscribers</span>
          </div>
          <div
            className="col-md-4"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "150px",
              background: "#d3d3d36b",
              marginLeft: "30px",

              borderRadius: "8px",
              padding: "12px 16px",
            }}
          >
            <span
              style={{
                fontSize: "32px",
                color: "lightblue",
              }}
            >
              <b>234</b>
            </span>
            <span style={{ color: "white" }}>Videos</span>
          </div>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
