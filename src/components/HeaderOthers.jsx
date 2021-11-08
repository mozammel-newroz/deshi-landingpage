import React from "react";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Menubar from "../components/Menubar";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 190,
    background: "#FBFBFB",
    flexDirection: "column",
    "& h3": {
      fontWeight: 600,
    },
  },
  brand_color: {
    color: "#08A858",
  },
  subtitle: {
    paddingTop: 20,
    display: "block",
  },
}));

const HeaderOthers = ({ title, link }) => {
  const classes = useStyle();

  return (
    <>
      <CssBaseline />
      <Menubar />
      <div className={classes.root}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="subtile1" className={classes.subtitle}>
          <Link to="/">Home</Link> /{" "}
          <span className={classes.brand_color}>{title}</span>
        </Typography>
      </div>
    </>
  );
};

export default HeaderOthers;
