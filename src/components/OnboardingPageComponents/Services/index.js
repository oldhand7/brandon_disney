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

            <ServicesH2>Sound Designer</ServicesH2>
            <ServicesP>
              We are looking for a creative sound designer to join our animated
              story YouTube channel team to produce and edit engaging sound
              effects and music that bring our stories to life.
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

          <ServicesH2>Editor</ServicesH2>
          <ServicesP>
            We are looking for a talented video editor to review and assemble
            footage given in our scripts into compelling videos that align with
            our true crime YouTube channel's style.
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

            <ServicesH2>Writer</ServicesH2>
            <ServicesP>
              We are looking for a talented true crime writer to research and
              craft compelling narratives around real criminal cases for scripts
              behind compelling true crime videos on our YouTube channel.
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
