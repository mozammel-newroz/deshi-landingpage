import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import screen1 from "../assets/images/screen1.png";
import screen2 from "../assets/images/screen2.png";
import one from "../assets/images/one.png";
import two from "../assets/images/two.png";
import three from "../assets/images/three.png";
import four from "../assets/images/four.png";
import five from "../assets/images/five.png";
import six from "../assets/images/six.png";
import seven from "../assets/images/saven.png";
import circle1 from "../assets/images/circle1.png";
import arrow1 from "../assets/images/arrow1.png";
import arrow2 from "../assets/images/arrow2.png";

import { makeStyles } from "@mui/styles";
import Footer from "./Footer";
const useStyle = makeStyles((theme) => ({
  section: {
    borderRadius: "100px 10px 10px 10px",
    backgroundImage: `url(${circle1}),  linear-gradient(to  right, #FBFBFB, #eee)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top",
    marginTop: 105,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  section_two: {
    borderRadius: "10px 10px 100px 10px",
    backgroundImage: `url(${circle1}),  linear-gradient(to  right, #FBFBFB, #eee)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top",
    marginTop: 160,
    [theme.breakpoints.down("sm")]: {
      marginTop: 60,
    },
  },
  section1: {
    position: "relative",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  section_image: {
    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
    [theme.breakpoints.down("lg")]: {
      overflow: "hidden",
      // display: "none",
    },
  },
  arrow1: {
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      right: -350,
      top: "45%",
      width: 260,
      height: 100,
      backgroundImage: `url(${arrow1})`,
      backgroundRepeat: "no-repeat",
      [theme.breakpoints.between("lg", "xl")]: {
        width: 70,
        right: -70,
      },
    },
  },
  arrow2: {
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      left: -410,
      top: "45%",
      width: 260,
      height: 100,
      backgroundImage: `url(${arrow2})`,
      backgroundRepeat: "no-repeat",
    },
  },
  section1_img: {
    position: "absolute",
    // right: -150,
    bottom: 0,
  },
  section2_img: {
    position: "absolute",
    left: -180,
    bottom: -140,
  },
  section1_left: {
    padding: 50,
  },
  icon_block: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0px",
    },
    "& img": {
      marginRight: 20,
      [theme.breakpoints.down("sm")]: {
        marginRight: 7,
        width: 50,
      },
    },
    "& h6": {
      fontSize: "1rem",
      // marginRight: 10
    },
  },
  brand_color: {
    color: "#08A858",
  },
}));

const HomePageContent = () => {
  const classes = useStyle();
  return (
    <>
      <Container maxWidth="lg" id="personal">
        <Grid container>
          <Grid item md={12}>
            <div className={classes.section}>
              <Grid container spacing={3}>
                <Grid item md={7}>
                  <div className={classes.section1_left}>
                    <Grid container spacing={2}>
                      <Grid item md={12}>
                        <Typography variant="h2">
                          <span className={classes.brand_color}>Deshi</span> for{" "}
                          <br /> Personal Use
                        </Typography>
                        <Typography variant="subtitle1">
                          Let us be a part of your journey, We promise to make
                          it fun
                        </Typography>
                      </Grid>
                      <Grid item md={6} xs={6}>
                        <div className={classes.icon_block}>
                          <img src={one} alt="" />
                          <Typography variant="h6">
                            Bill <br /> Payment
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item md={6} xs={6}>
                        <div className={classes.icon_block}>
                          <img src={two} alt="" />
                          <Typography variant="h6">
                            Mobile
                            <br />
                            Recharge
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item md={6} xs={6}>
                        <div className={classes.icon_block}>
                          <img src={three} alt="" />
                          <Typography variant="h6">
                            Send
                            <br />
                            Money
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item md={6} xs={6}>
                        <div className={classes.icon_block}>
                          <img src={four} alt="" />
                          <Typography variant="h6">
                            Receive
                            <br />
                            Money
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item md={5}>
                  <div
                    className={`${classes.section1} ${classes.section_image} ${classes.arrow1}`}
                  >
                    <img
                      src={screen1}
                      alt=""
                      className={classes.section1_img}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" id="business">
        <Grid container>
          <Grid item md={12}>
            <div className={classes.section_two}>
              <Grid container spacing={3}>
                <Grid item md={5}>
                  <div
                    className={`${classes.section1} ${classes.section_image} ${classes.arrow2}`}
                  >
                    <img
                      src={screen2}
                      alt=""
                      className={classes.section2_img}
                    />
                  </div>
                </Grid>
                <Grid item md={7}>
                  <div className={classes.section1_left}>
                    <Grid container spacing={2}>
                      <Grid item md={12}>
                        <Typography variant="h2">
                          <span className={classes.brand_color}>Deshi</span>{" "}
                          <br /> for Business Use
                        </Typography>
                        <Typography variant="subtitle1">
                          Let us be a part of your journey, We promise to make
                          it fun
                        </Typography>
                      </Grid>
                      <Grid item md={6} xs={6}>
                        <div className={classes.icon_block}>
                          <img src={five} alt="" />
                          <Typography variant="h6">
                          Marchant Ease <br /> Onboarding
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item md={6} xs={6}>
                        <div className={classes.icon_block}>
                          <img src={six} alt="" />
                          <Typography variant="h6">
                          Hassle-Free <br /> Sattlement
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item md={6} xs={6}>
                        <div className={classes.icon_block}>
                          <img src={seven} alt="" />
                          <Typography variant="h6">
                          Accept <br /> Payments 
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default HomePageContent;
