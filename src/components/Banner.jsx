import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import logo from "../assets/images/logo.png";
import NavBar from "./Navbar";
import banner_image from "../assets/images/banner_image.png";
import banner_bg from "../assets/images/banner_bg.png";
import glob from "../assets/images/glob.png";

const useStyle = makeStyles((theme) => ({
  signup: {
    background: "#FFFFFF !important",
    color: "#05984F !important",
    padding: "10px 30px !important",
    borderRadius: "30px !important",
    fontSize: "1rem !important",
    fontWeight: "600 !important",
    textTransform: "capitalize !important",
    "& a": {
      color: "#05984F",
      textDecoration: "none",
    },
  },
  business: {
    background: "#FFFFFF !important",
    color: "#05984F !important",
    padding: "20px 30px !important",
    borderRadius: "30px !important",
    fontSize: "1rem !important",
    fontWeight: "600 !important",
    textTransform: "capitalize !important",
    "& a": {
      color: "#05984F",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "15px 15px !important",
      borderRadius: "30px !important",
      fontSize: "0.7rem !important",
    },
  },
  banner: {
    background: `url(${banner_bg}), linear-gradient(to right, #34A853, #017C3F)`,
    // padding: "120px 0px",
    height: 700,
    // padding: 20,
    color: "#fff",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    // backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      padding: "50px 0px",
    },
  },
  banner_headline: {
    fontSize: "2.5rem !important",
    fontWeight: "600 !important",
    paddingBottom: 10,
  },
  banner_image: {
    maxWidth: "120%",
    position: "relative",
    bottom: -52,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  banner_image_wapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 700,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  margin_top_20: {
    marginTop: "30px !important",
    padding: "10px 40px !important",
  },
  padding_banner_text: {
    paddingLeft: "100px !important",
    marginTop: "-100px !important",
    "& h3": {
      marginBottom: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "90px 10px !important",
      textAlign: "center",
    },
  },
  margin_bottom: {
    marginBottom: "30px !important",
  },
  banner_bottom: {
    position: "relative",
    top: -50,
  },
  banner_text: {
    fontSize: "1.6rem !important",
    maxWidth: 600,
  },
  header_subtitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem !important",
    },
  },
  language_wrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  language: {
    display: "flex",
    alignItems: "center",
    width: "auto",
    marginLeft: 20,
    "& img": {
      marginRight: 5,
    },
    "& select": {
      fontSize: "1.1rem",
      border: "0px solid #ddd",
      background: "rgba(0,0,0,0)",
    },
  },
  [theme.breakpoints.down("xl")]: {
    marginLeft: 5,
  },
}));

const Banner = () => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.banner}>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sm={5}>
              <div className={classes.banner_image_wapper}>
                <img
                  src={banner_image}
                  className={classes.banner_image}
                  alt=""
                />
              </div>
            </Grid>
            <Grid item sm={7} className={classes.padding_banner_text}>
              <Typography variant="h2" className={classes.banner_headline}>
                Spend . Save . Manage
              </Typography>
              <Typography variant="h3" className={classes.banner_text}>
                Deshi connects you to the digital financial ecosystem, explore
                it today!
              </Typography>
              <Typography variant="subtitle1" className={classes.margin_bottom}>
                Within a minute, register a new account and unlock exciting
                features
              </Typography>
              <Button variant="contained" className={classes.signup}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.deshi.personal"
                  target="_blank"
                >
                  Signup for Free
                </a>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.banner_bottom}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={12}>
              <div
                className=""
                style={{
                  background: "#ddd",
                  padding: "30px 50px",
                  borderRadius: 60,
                  backgroundColor: "rgba(221, 221, 221, 0.35)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(221, 221, 221, 0.55)",
                }}
              >
                <Grid container spacing={1}>
                  <Grid
                    item
                    md={9}
                    xs={6}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h3"
                      style={{
                        fontSize: "1.8rem",
                      }}
                      className={classes.header_subtitle}
                    >
                      Looking for Deshi Business?{" "}
                      <span style={{ fontWeight: 300 }}>
                        We're here to support you
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item md={3} xs={6}>
                    <div className="" style={{ textAlign: "right" }}>
                      <Button variant="contained" className={classes.business}>
                        <a href="#business">Deshi for Business</a>
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
