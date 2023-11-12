import React from "react";
// import Icon1 from "../../../images/svg-4.svg";
// import Icon2 from "../../../images/svg-5.svg";
// import Icon3 from "../../../images/svg-6.svg";
import Grow from "@material-ui/core/Grow";
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServiceElements";
import { Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { FaTasks } from "react-icons/fa";

const Services = () => {
  return (
    <ServicesContainer id="apply">
      <ServicesH1>
        {" "}
        <FaTasks style={{ marginRight: "20px" }}></FaTasks>Our Jobs
      </ServicesH1>
      <ServicesWrapper>
        <ScrollAnimation animateIn="fadeInLeft">
          <ServicesCard>
            {/* <ServicesIcon src={Icon1} /> */}
            <ServicesH2>Media Editor</ServicesH2>
            <ServicesP>
              Leverage social media platforms to promote your cartoons. Share
              teaser clips, behind-the-scenes content, and engage with your
              audience through comments and messages.
            </ServicesP>
            <div style={{ display: "flex" }}>
              <Button primary size="large" style={{ marginLeft: "auto" }}>
                {"Apply"}
              </Button>
            </div>
          </ServicesCard>
        </ScrollAnimation>
        <ServicesCard>
          {/* <ServicesIcon src={Icon1} /> */}
          <ServicesH2>Media Editor</ServicesH2>
          <ServicesP>
            Leverage social media platforms to promote your cartoons. Share
            teaser clips, behind-the-scenes content, and engage with your
            audience through comments and messages.
          </ServicesP>
          <div style={{ display: "flex" }}>
            <Button primary size="large" style={{ marginLeft: "auto" }}>
              {"Apply"}
            </Button>
          </div>
        </ServicesCard>
        <ScrollAnimation animateIn="fadeInRight">
          <ServicesCard>
            {/* <ServicesIcon src={Icon1} /> */}
            <ServicesH2>Media Editor</ServicesH2>
            <ServicesP>
              Leverage social media platforms to promote your cartoons. Share
              teaser clips, behind-the-scenes content, and engage with your
              audience through comments and messages.
            </ServicesP>
            <div style={{ display: "flex" }}>
              <Button primary size="large" style={{ marginLeft: "auto" }}>
                {"Apply"}
              </Button>
            </div>
          </ServicesCard>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
          <ServicesCard>
            {/* <ServicesIcon src={Icon1} /> */}
            <ServicesH2>Media Editor</ServicesH2>
            <ServicesP>
              Leverage social media platforms to promote your cartoons. Share
              teaser clips, behind-the-scenes content, and engage with your
              audience through comments and messages.
            </ServicesP>
            <div style={{ display: "flex" }}>
              <Button primary size="large" style={{ marginLeft: "auto" }}>
                {"Apply"}
              </Button>
            </div>
          </ServicesCard>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <ServicesCard>
            {/* <ServicesIcon src={Icon1} /> */}
            <ServicesH2>Media Editor</ServicesH2>
            <ServicesP>
              Leverage social media platforms to promote your cartoons. Share
              teaser clips, behind-the-scenes content, and engage with your
              audience through comments and messages.
            </ServicesP>
            <div style={{ display: "flex" }}>
              <Button primary size="large" style={{ marginLeft: "auto" }}>
                {"Apply"}
              </Button>
            </div>
          </ServicesCard>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight">
          <ServicesCard>
            {/* <ServicesIcon src={Icon1} /> */}
            <ServicesH2>Media Editor</ServicesH2>
            <ServicesP>
              Leverage social media platforms to promote your cartoons. Share
              teaser clips, behind-the-scenes content, and engage with your
              audience through comments and messages.
            </ServicesP>
            <div style={{ display: "flex" }}>
              <Button primary size="large" style={{ marginLeft: "auto" }}>
                {"Apply"}
              </Button>
            </div>
          </ServicesCard>
        </ScrollAnimation>
        {/* <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Real Time Communication</ServicesH2>
          <ServicesP>
            Shortlist the candidates and interview them on the spot. It's that
            easy!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Editing </ServicesH2>
          <ServicesP>
            Editing is a crucial step in filmmaking. Ensure a smooth flow of the
            story, cut unnecessary scenes, and pay attention to pacing.
            Effective editing can turn good footage into a great film.
          </ServicesP>
        </ServicesCard> */}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
