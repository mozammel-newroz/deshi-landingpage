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
    paddingLeft: 8,
    paddingRight: 8,
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

const HeaderOthers = ({ title, link, category }) => {
  const classes = useStyle();

  return (
    <>
      <CssBaseline />
      <Menubar />
      <div className={classes.root}>
        {category === "offers" ? (
          <Typography variant="h3">{category}</Typography>
        ) : (
          <Typography variant="h3">{title}</Typography>
        )}
        <Typography variant="subtile1" className={classes.subtitle}>
          <Link to="/">Home</Link> /{" "}
          {category === "offers" ? <Link to="#">Offers / </Link> : null}
          <span className={classes.brand_color}>{title}</span>
        </Typography>
      </div>
    </>
  );
};

export default HeaderOthers;
