import React, { useEffect, useState } from "react";
import Footer from "../components/Common/Footer";
import HeroSection from "../components/OnboardingPageComponents/HeroSection";
import InfoSection from "../components/OnboardingPageComponents/InfoSection";
import { homeObjOne } from "../components/OnboardingPageComponents/InfoSection/Data";
import NavBar from "../components/OnboardingPageComponents/Navbar";
import Sidebar from "../components/OnboardingPageComponents/Sidebar";
import Services from "../components/OnboardingPageComponents/Services";
import {
  InfoContainer,
  InfoWrapper,
} from "../components/OnboardingPageComponents/InfoSection/InfoElements";
import Subscription from "../components/OnboardingPageComponents/Subscription";
import {
  HeroHeader,
  HeroSpan,
} from "../components/OnboardingPageComponents/HeroSection/HeroElements";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [hide, setHide] = useState(false);
  const [type, setType] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));

    if (userInfo !== null) {
      setHide(true);
      if (userInfo.type === "employer") {
        setType("Company");
      } else {
        setType("Applicant");
      }
    }
  }, []);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <NavBar toggle={toggle} hide={hide} type={type} />
      <HeroSection />

      <div
        style={{
          backgroundImage: "url(./images/land_bg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <HeroHeader
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Our Audience
        </HeroHeader>
        <div style={{ display: "flex", justifyContent: "center" }}>
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
            <HeroSpan>
              <b className="text-white">50M</b>
            </HeroSpan>
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
            <HeroSpan>
              <b className="text-white">4M</b>
            </HeroSpan>
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
            <HeroSpan>
              <b className="text-white">234</b>
            </HeroSpan>
            <span style={{ color: "white" }}>Videos</span>
          </div>
        </div>
        <InfoSection {...homeObjOne} />
        <Subscription />
        <Services></Services>
      </div>
      {/* <SimpleRegistrationForm /> */}
      <Footer />
    </>
  );
};

export default Home;
