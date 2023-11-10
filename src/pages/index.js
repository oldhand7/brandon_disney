import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Common/Footer";
import HeroSection from "../components/OnboardingPageComponents/HeroSection";
import InfoSection from "../components/OnboardingPageComponents/InfoSection";
import { homeObjOne } from "../components/OnboardingPageComponents/InfoSection/Data";
import NavBar from "../components/OnboardingPageComponents/Navbar";
import Sidebar from "../components/OnboardingPageComponents/Sidebar";
import SimpleRegistrationForm from "../components/Common/Auth/Register/SimpleRegistrationForm";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const [type, setType] = useState(null);
  const [state, setState] = useState({
    data: {
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
      email: "",
      type: "",
      username: "",
      password: "",

      cname: "",
      country: "",
      region: "",
      cabout: "",
      cdesc: "",

      csector: "",

      title: "",
      skills: [],
      skillSet: [{ skill: "" }],
      sector: "",
      summary: "",

      work: [],
      workSet: [
        {
          wtitle: "",
          wcompany: "",
          wlocation: "",
          wtype: "",
          wstart: "",
          wend: "",
        },
      ],

      education: [],
      educationSet: [{ etitle: "", ecollege: "", estart: "", eend: "" }],
    },
    errors: {},
    currentStep: 0,
    redirect: null,
  });
  const handleOnChange = ({ target }) => {
    const { data, errors } = this.state;
    target.value.length <= 3
      ? (errors[
          target.name
        ] = `Length of ${target.name} must be greater than 3`)
      : (errors[target.name] = "");
    data[target.name] = target.value;
    this.setState({ data, errors });
  };
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (handleValidation()) {
    //   const { password, username, email } = values;
    //   const { data } = await axios.post(registerRoute, {
    //     username,
    //     email,
    //     password,
    //   });
    //   if (data.status === false) {
    //     toast.error(data.msg, toastOptions);
    //   } else {
    //     localStorage.setItem("user", JSON.stringify(data.user));
    //     navigate("/chat");
    //   }
    // }
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <NavBar toggle={toggle} hide={hide} type={type} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjTwo} /> */}
      {/* <Services /> */}
      {/* <InfoSection {...homeObjThree} /> */}
      <SimpleRegistrationForm />
      {/* <RegistrationForm /> */}
      <Footer />
    </>
  );
};

export default Home;
