import { Box, Grid } from "@material-ui/core";
import React from "react";
import {
  renderButton,
  renderDatePicker,
  renderInputText,
  renderSelect,
  renderText,
} from "../../DisplayComponent";
import "./styles.css";

export default function PersonalBio({ state, handleOnChange, handleNext }) {
  return (
    <>
      <Box mt={2} mb={4}>
        {renderText({ label: "Please Fill The Personal Details" })}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          {renderInputText({
            label: "First Name",
            name: "firstName",
            state,
            handleOnChange,
          })}
        </Grid>
        </Grid>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12}>
          {renderInputText({
            label: "Last Name",
            name: "lastName",
            state,
            handleOnChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          {renderSelect({
            label: "Gender",
            name: "gender",
            state,
            handleOnChange,
          })}
        </Grid>
        </Grid>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12}>
          {/* {renderDatePicker({
            label: "BirthDay",
            name: "birthday",
            state,
            handleOnChange,
          })} */}
        </Grid>
      </Grid>
     
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          {renderInputText({
            label: "Phone Number",
            name: "phone",
            state,
            handleOnChange,
          })}
        </Grid>
        </Grid>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12}>
          {renderInputText({
            label: "Email Address",
            name: "email",
            state,
            handleOnChange,
          })}
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent="flex-end"
        style={{ marginTop: "1rem" }}
      >
        <Box p={2}>
          {renderButton({
            label: "Submit",
            variant: "outlined",
            handleNext: handleNext,
          })}
        </Box>
      </Grid>
    </>
  );
}
