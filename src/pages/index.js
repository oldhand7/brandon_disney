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
