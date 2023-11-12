import { Box, Grid, Paper } from "@material-ui/core";
import { withStyles } from "@mui/styles";
import axios from "axios";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { toast } from "react-toastify";
import { registerRoute } from "../../../../utils/APIRoutes";
import PersonalBio from "./FormSteps/PersonalBio";
import { Styles } from "./styles";
import { Typography } from "@material-ui/core";

import { Button, createMuiTheme, MenuItem, ThemeProvider } from "@mui/material";
import TextField from "@mui/material/TextField";

const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Others",
    label: "Others",
  },
];

class RegistrationForm extends Component {
  toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  handleUserValidation = () => {
    const { skillSet, educationSet, sector, summary, gender, type } =
      this.state.data;
    console.log(skillSet);
    if (skillSet.length < 1 || skillSet[0].skill === "") {
      toast.error("Please add atleast one skill", this.toastOptions);
      return false;
    } else if (educationSet.length < 1 || educationSet[0].skill === "") {
      toast.error(
        "Please add atleast one education background",
        this.toastOptions
      );
      return false;
    } else if (sector === "") {
      toast.error("Please specify your sector", this.toastOptions);
      return false;
    } else if (summary === "") {
      toast.error("Please tell us about yourself(Summary)", this.toastOptions);
      return false;
    } else if (gender === "") {
      toast.error("Please select your gender", this.toastOptions);
      return false;
    } else if (type === "") {
      toast.error("Please specify your user type", this.toastOptions);
      return false;
    }
    return true;
  };

  extractSkills = () => {
    const { data } = this.state;
    data.skillSet.forEach(function (value) {
      if (value.skill !== "") data.skills.push(value.skill);
    });
    this.setState({ data });
  };
  extractWorks = () => {
    const { data } = this.state;
    data.workSet.forEach(function (value) {
      data.work.push(value.skill);
    });
    this.setState({ data });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const stateData = this.state.data;
    let firstName = stateData.firstName;
    let lastName = stateData.lastName;
    let gender = stateData.gender;
    let phone = stateData.phone;
    let email = stateData.email;
    let type = stateData.type;
    let username = stateData.username;
    let password = stateData.password;

    if (type === "") {
      toast.error("Please select your type", this.toastOptions);
    }

    if (type === "Applicant") {
      if (this.handleUserValidation()) {
        this.extractSkills();
        let title = stateData.title;
        let skills = stateData.skills;
        let sector = stateData.sector;
        let summary = stateData.summary;
        let workSet = stateData.workSet;
        let educationSet = stateData.educationSet;

        console.log(
          firstName,
          lastName,
          gender,
          phone,
          email,
          type,
          username,
          password,
          title,
          skills,
          sector,
          summary,
          workSet,
          educationSet
        );

        const { data } = await axios.post(registerRoute, {
          firstName,
          lastName,
          gender,
          phone,
          email,
          type,
          username,
          password,

          title,
          skills,
          sector,
          summary,
          workSet,
          educationSet,
        });
        if (data.status === false) {
          toast.error(data.msg, this.toastOptions);
        } else {
          toast.success(data.msg, this.toastOptions);
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.replace("localhost:3000/auth/login");
          window.location.href = "localhost:3000/auth/login";
        }
      }
    } else if (type === "Company") {
      if (this.handleCompanyValidation()) {
        let cname = stateData.cname;
        let csector = stateData.csector;
        let country = stateData.country;
        let region = stateData.region;
        let cabout = stateData.cabout;
        let cdesc = stateData.cdesc;
        let workSet = stateData.workSet;
        let educationSet = stateData.educationSet;

        const { data } = await axios.post(registerRoute, {
          firstName,
          lastName,
          gender,
          phone,
          email,
          type,
          username,
          password,

          cname,
          csector,
          country,
          region,
          cabout,
          cdesc,
          workSet,
          educationSet,
        });
        if (data.status === false) {
          toast.error(data.msg, this.toastOptions);
        } else {
          toast.success(data.msg, this.toastOptions);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("company", JSON.stringify(data.company));
          window.location.replace("localhost:3000/codesent");
          window.location.href = "localhost:3000/codesent";
        }
      }
    }
  };
  state = {
    data: {
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
      email: "",
      type: "",
      username: "",
      password: "",
      birthday: "2023-5-6",
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
  };
  render() {
    const { classes } = this.props;

    const handleOnChange = ({ target }) => {
      const { data, errors } = this.state;
      target.value.length <= 3
        ? (errors[
            target.name
          ] = `Length of ${target.name} must be greater than 3`)
        : (errors[target.name] = "");
      console.log(target.name, target.value);
      data[target.name] = target.value;
      this.setState({ data, errors });
    };

    const handleNext = () => {};

    const getStepsItems = (steps) => {
      return (
        <div style={{ padding: "20px" }}>
          <h2 style={{ textAlign: "center" }}>
            Please Fill The Personal Details
          </h2>
          <TextField
            label="FirstName"
            // color={color ? color : "primary"}
            variant="outlined"
            fullWidth={true}
            size="small"
            name="firstName"
            style={{ marginTop: "20px" }}
            value={this.state.data.firstName}
            error={false}
            helperText={this.state.errors.name}
            onChange={handleOnChange}
            required
          />
          <TextField
            label="LastName"
            name="lastName"
            // color={color ? color : "primary"}
            variant="outlined"
            fullWidth={true}
            style={{ marginTop: "20px" }}
            size="small"
            value={this.state.data.lastName}
            error={false}
            helperText={this.state.errors.name}
            onChange={handleOnChange}
            required
          />
          <TextField
            id="standard-select-gender"
            select
            name="gender"
            label={"Gender"}
            value={this.state.data.gender}
            onChange={handleOnChange}
            variant="outlined"
            // color={color ? color : "primary"}
            style={{ width: "100%", marginTop: "20px" }}
            size="small"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            sx={{ input: { color: "black" } }}
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="PhoneNumber"
            name="phone"
            // color={color ? color : "primary"}
            variant="outlined"
            fullWidth={true}
            size="small"
            value={this.state.data.phone}
            style={{ marginTop: "20px" }}
            error={false}
            helperText={this.state.errors.name}
            onChange={handleOnChange}
            required
          />
          <TextField
            label="Email"
            // color={color ? color : "primary"}
            variant="outlined"
            fullWidth={true}
            size="small"
            value={this.state.data.email}
            error={false}
            style={{ marginTop: "20px" }}
            helperText={this.state.errors.name}
            onChange={handleOnChange}
            required
          />
          <div style={{ display: "flex" }}>
            <Button
              primary
              size="large"
              style={{ marginLeft: "auto", marginTop: "40px" }}
            >
              {"Apply"}
            </Button>
          </div>
        </div>
        // <PersonalBio
        //   state={this.state}
        //   handleOnChange={handleOnChange}
        //   handleNext={handleNext}
        // />
      );
    };
    return (
      <div>
        <Grid container className={classes.formContainer}>
          <Grid item xs={12} sm={7}>
            <Box mb={16} component={Paper} className={classes.transparent}>
              <form
                className={classes.form}
                onSubmit={(event) => this.handleSubmit(event)}
              >
                {getStepsItems(this.state.currentStep)}
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(RegistrationForm);
