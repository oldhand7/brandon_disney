import React, { useEffect, useState } from "react";
import Footer from "../components/Common/Footer";
// import HeroSection from "../components/OnboardingPageComponents/HeroSection";
// import InfoSection from "../components/OnboardingPageComponents/InfoSection";
// import { homeObjOne } from "../components/OnboardingPageComponents/InfoSection/Data";
// import NavBar from "../components/OnboardingPageComponents/Navbar";
// import Sidebar from "../components/OnboardingPageComponents/Sidebar";
// import SimpleRegistrationForm from "../components/Common/Auth/Register/SimpleRegistrationForm";
// import Services from "../components/OnboardingPageComponents/Services";

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
      <div
        style={{ maxWidth: "1000px", margin: "0 auto", marginBottom: "100px" }}
      >
        <h1
          style={{
            marginTop: "100px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Terms of Use
        </h1>

        <section>
          <h2 style={{ marginTop: "30px" }}>1. Introduction</h2>
          <p>
            Welcome to our website. By using this website, you agree to comply
            with and be bound by the following terms and conditions of use.
          </p>

          <h2 style={{ marginTop: "30px" }}>2. Intellectual Property Rights</h2>
          <p>
            The content of this website is for your general information and use
            only. It is subject to change without notice.
          </p>

          <h2 style={{ marginTop: "30px" }}>3. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of Join VarietySplash.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
