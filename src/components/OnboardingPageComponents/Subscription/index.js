import React, { useState } from "react";
import { Column2, ImgWrap, InfoContainer, InfoWrapper } from "./InfoElements";
import { Button } from "../../ButtonElement";
import ScrollAnimation from "react-animate-on-scroll";
import { FaBookOpen } from "react-icons/fa";
import CountUp from "react-countup";
import { FaUserFriends } from "react-icons/fa";

const Subscription = ({ lightBg, id }) => {
  const [countVal, setCountVal] = useState({ sub: 5000001, views: 2000000001 });
  const generateRandomString = (length) => {
    const characters = "123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  };
  return (
    <>
      <InfoContainer
        lightBg={lightBg}
        id={id}
        className="bg-black"
        style={{ paddingTop: "10px" }}
      >
        <InfoWrapper>
          <div style={{ color: "rgb(180, 188, 180)" }} className="row">
            <div
              className="col-md-5"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                class="area"
                style={{
                  display: "flex",
                  // marginLeft: "auto",
                  justifyContent: "center",
                }}
              >
                <div style={{}}>
                  <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
                    <h2 class="med-title">By The Numbers</h2>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="fadeInLeft" delay={0.13 * 1000}>
                    <h3 class="big-number" style={{ color: "#00BCE7" }}>
                      <CountUp
                        start={0}
                        enableScrollSpy
                        end={countVal.sub}
                        duration={3}
                        decimals={true}
                        formattingFn={(val) =>
                          val > 5000000 ? "5 million+" : generateRandomString(7)
                        }
                      />{" "}
                    </h3>

                    <p>SUBSCRIBERS</p>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeInLeft" delay={0.15 * 1000}>
                    <h3 class="big-number" style={{ color: "#00BCE7" }}>
                      <CountUp
                        start={0}
                        end={countVal.views}
                        duration={4}
                        decimals={true}
                        decimalPlaces={true}
                        enableScrollSpy
                        formattingFn={(val) =>
                          val > 2000000000
                            ? "2 billion+"
                            : generateRandomString(10)
                        }
                        separator=","
                      />{" "}
                    </h3>
                    <p>TOTAL VIEWS</p>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
                    <h3 class="big-number" style={{ color: "#00BCE7" }}>
                      <CountUp
                        start={-100}
                        end={14}
                        enableScrollSpy
                        duration={2}
                        formattingFn={(val) =>
                          val > 13 ? 13 : generateRandomString(2)
                        }
                        separator=","
                      />
                    </h3>
                    <p>CHANNELS</p>
                  </ScrollAnimation>
                </div>
              </div>
            </div>

            <ScrollAnimation
              className="col-md-7"
              animateIn="fadeInRight"
              delay={0.2 * 1000}
            >
              <div
                class="pinkcol"
                style={{
                  paddingLeft: "15px",

                  color: "rgb(180, 188, 180)",
                }}
              >
                <div style={{ display: "flex" }}>
                  <FaUserFriends
                    style={{ marginRight: "10px", fontSize: "2rem" }}
                  />
                  <h2 class="med-title" style={{ color: "rgb(180, 188, 180)" }}>
                    Who We Are
                  </h2>
                </div>

                <ScrollAnimation animateIn="fadeInRight" delay={0.15 * 1000}>
                  <p style={{ color: "rgb(180, 188, 180)" }}>
                    Our network of YouTube channels captivates and motivates
                    audiences worldwide. With over 5 million subscribers, 2
                    billion views, and 13 channels, we've successfully created
                    binge-worthy content across genres, fueled by our creative
                    team's passion for producing innovative content. Join us in
                    delivering captivating experiences that leave an impact on
                    diverse audiences.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" delay={0.18 * 1000}>
                  <p style={{ color: "rgb(180, 188, 180)" }}>
                    We're looking for all-consuming, smart, and creative people
                    to push the boundaries of YouTube. Most importantly, we
                    value people who align with our company values and vision.
                    People with complete respect for others who openly
                    communicate are the reason we have been able to launch so
                    many remarkable ideas. If you think your abilities and
                    passion are a fit for our forward-thinking team, we would
                    love to get in touch with you! this is the full correct text
                  </p>
                </ScrollAnimation>
                {/* 
                <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
                  <p style={{ color: "rgb(180, 188, 180)" }}>
                    If you think you have what it takes to be a part of our
                    innovative team, we would love to chat with you!
                  </p>
                </ScrollAnimation> */}
              </div>
            </ScrollAnimation>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Subscription;
