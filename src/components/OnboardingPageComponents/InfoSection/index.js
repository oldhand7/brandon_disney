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

const InfoSection = ({
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
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <div
            className="row"
            imgStart={imgStart}
            style={{ marginTop: "50px", display: "flex" }}
          >
            <ScrollAnimation
              animateIn="fadeInLeft"
              className="col-md-5"
              delay={0.2 * 1000}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Column2>
                {/* <ImgWrap> */}
                <img src="/images/youtube.png" width="100%" />{" "}
                {/* <Img src={img} alt={alt} /> */}
                {/* </ImgWrap> */}
              </Column2>
            </ScrollAnimation>

            <ScrollAnimation
              className="col-md-7"
              animateIn="fadeInRight"
              delay={0.2 * 1000}
            >
              <Column1 children>
                <TextWrapper>
                  {/* <TopLine>{topLine}</TopLine> */}

                  <Heading lightText={lightText} className="txt-white">
                    <FaBookOpen style={{ marginRight: "10px" }}></FaBookOpen>
                    {headline}
                  </Heading>
                  <Subtitle
                    darkText={darkText}
                    className="txt-white"
                    style={{ textAlign: "left" }}
                  >
                    {description}
                  </Subtitle>
                  {/* <BtnWrap>
                  <Button
                    to="/auth/register"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {button_label}
                  </Button>
                </BtnWrap> */}
                </TextWrapper>
              </Column1>
            </ScrollAnimation>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
