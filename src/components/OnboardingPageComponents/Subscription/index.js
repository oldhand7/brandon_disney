import React from "react";
import {
  Column2,
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  BtnWrap,
  Column1,
  Heading,
  Img,
  InfoRow,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoElements";
import { Button } from "../../ButtonElement";
import ScrollAnimation from "react-animate-on-scroll";
import { FaBookOpen } from "react-icons/fa";

const Subscription = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  headline,
  description,
  button_label,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer
        lightBg={lightBg}
        id={id}
        className="bg-black"
        style={{ paddingTop: "30px" }}
      >
        <InfoWrapper>
          <div style={{ display: "flex", color: "rgb(180, 188, 180)" }}>
            <ScrollAnimation
              animateIn="fadeInLeft"
              delay={0.2 * 1000}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                class="area"
                style={{
                  width: "500px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{}}>
                  <h2 class="med-title">By The Numbers</h2>
                  <h3 class="big-number" style={{ color: "#00BCE7" }}>
                    225 million+
                  </h3>
                  <p>SUBSCRIBERS</p>
                  <h3 class="big-number" style={{ color: "#00BCE7" }}>
                    25 billion+
                  </h3>
                  <p>TOTAL VIEWS</p>
                  <h3 class="big-number" style={{ color: "#00BCE7" }}>
                    $10 million+
                  </h3>
                  <p>DONATED</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
              <div
                class="pinkcol"
                style={{
                  paddingLeft: "15px",

                  color: "rgb(180, 188, 180)",
                }}
              >
                <h2 class="med-title" style={{ color: "rgb(180, 188, 180)" }}>
                  Who We Are
                </h2>
                <p style={{ color: "rgb(180, 188, 180)" }}>
                  We are the largest YouTube brand in the world, renowned for
                  our seemingly impossible creative ingenuities. At MrBeast, we
                  attribute much of our success to putting our four foundational
                  pillars of viral content above everything else: IRL Comedy,
                  Spectacles, General Good, and Philanthropy. Our YouTube
                  presence boasts 6 channels, 146 million subscribers, 20
                  billion video views, and a 501c3 accredited charity.
                </p>
                <p style={{ color: "rgb(180, 188, 180)" }}>
                  It takes a team of the world s best to stay cutting edge in an
                  ephemeral culture. Therefore, we are looking for obsessive
                  people that are smart and well versed in content creation.
                  These individuals will not only fit in with our company
                  values, but they will also be curious, ambitious, fearless,
                  self-starters that push the limits of what was once thought of
                  as impossible.
                </p>
                <p style={{ color: "rgb(180, 188, 180)" }}>
                  If you think you have what it takes to be a part of our
                  innovative team, we would love to chat with you!
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Subscription;
