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
import { Img } from "../InfoSection/InfoElements";
import { Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <ServicesContainer id="apply" className="bg-black">
      <ServicesH1 className="txt-white">
        {" "}
        <FaTasks style={{ marginRight: "20px" }}></FaTasks>
        Our Jobs
      </ServicesH1>
      <ServicesWrapper>
        <ScrollAnimation animateIn="fadeInLeft">
          <ServicesCard className="txt-white">
            {/* <ServicesIcon src={Icon1} /> */}
            <img src="/images/editor.png" width="60px" />

            <ServicesH2>Media Editor</ServicesH2>
            <ServicesP>
              We are looking for a talented video editor to assemble recorded
              footage into a finished project that matches our company vision
              and is suitable for publication.
            </ServicesP>
            <div style={{ display: "flex" }}>
              <Button primary size="large" style={{ marginLeft: "auto" }}>
                <a href="/editor" style={{ textDecoration: "none" }}>
                  {"Apply"}
                </a>
              </Button>
            </div>
          </ServicesCard>
        </ScrollAnimation>
        <ServicesCard className="txt-white">
          {/* <ServicesIcon src={Icon1} /> */}
          <img src="/images/thumb.png" width="60px" />

          <ServicesH2>Thumbnail Designer</ServicesH2>
          <ServicesP>
            We are looking for someone to create thumbnails for our videos. You
            should be able to create thumbnails that are eye catching and can
            attract viewers to click.
          </ServicesP>
          <div style={{ display: "flex" }}>
            <Button primary size="large" style={{ marginLeft: "auto" }}>
              <a href="/thumb" style={{ textDecoration: "none" }}>
                {"Apply"}
              </a>
            </Button>
          </div>
        </ServicesCard>
        <ScrollAnimation animateIn="fadeInRight">
          <ServicesCard className="txt-white">
            {/* <ServicesIcon src={Icon1} /> */}
            <img src="/images/animator.png" width="60px" />

            <ServicesH2>Animator</ServicesH2>
            <ServicesP>
              We are looking for a talented animator to create animated clips
              for our videos. You should be able to bring sight and sound
              together in order to tell a cohesive story.
            </ServicesP>
            <div style={{ display: "flex" }}>
              <Button primary size="large" style={{ marginLeft: "auto" }}>
                <a href="/animator" style={{ textDecoration: "none" }}>
                  {"Apply"}
                </a>
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
