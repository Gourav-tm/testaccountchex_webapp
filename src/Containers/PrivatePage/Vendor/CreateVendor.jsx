import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import AddVendor from "./AddVendor";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "block",
    background: "#fff",
  },
  heading: {
    fontSize: "1.2rem",
    fontWeight: "300",
  },
}));
const CreateVendor = () => {
 
  const setPersonalInfo = (panelName, objPersonalInfo) => {
    
  };
 
  return (
    <>
      <AddVendor setPersonalInfo={setPersonalInfo}></AddVendor>
    </>
  );
};

export default CreateVendor;
