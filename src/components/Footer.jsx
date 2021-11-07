import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import logo from "../assets/images/logo.png";
import phone from "../assets/images/phone.svg";
import email from "../assets/images/email.svg";
import pin from "../assets/images/pin.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import youtube from "../assets/images/youtube.svg";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 200,
    paddingTop: 40,
    background: "#FCFCFC",
    // background: "#F0F0F0",
    [theme.breakpoints.down("sm")]: {
    marginTop: 30
    }
  },
  icon_block: {
    display: "flex",
    alignItems: "center",
    margin: "25px 0px",
    "& img": {
      marginRight: 20,
    },
  },

  hide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon_block_wrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  content: {
    fontSize: "1rem !important",
  },
  footer_bottom: {
    display: "flex",
    borderTop: "1px solid #EEE",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    "& div": {
      flex: 1,
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      height: 130,

      flexDirection: "column-reverse",
      padding: "35px 10px",
    },
  },
  menu_item: {
    color: "#666 !important",
    padding: "0px 20px !important",
    textTransform: "capitalize !important  ",
    // display: "block !important",

    "&:hover": {
      color: "#00AA61 !important",
    },
  },
  bottom_menu: {
    display: "flex",
    justifyContent: "space-between",
  },
  copyright: {
    fontSize: "0.9rem !important", color: "#666 !important",
    [theme.breakpoints.down("sm")]: {
      // textAlign: 'left !important'
    }
  }
}));
function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={5}>
            <img src={logo} alt="" />
            <Typography variant="body2" className={classes.content}>
              The Bangladesh Bank is already taking steps to ensure MFS
              interoperability by the end of this year.
              <br />
              <br />
              Following that, users will be able to transfer funds to all
              operators and banks free of cost. Interoperability will be ensured
              through two platforms: the Interoperable Digital Transaction
              Platform (IDTP) and the National Payment Switch Bangladesh (NPSB).
            </Typography>
          </Grid>
          <Grid item md={5}>
            <Typography variant="h6">Contact us</Typography>
            <div className={classes.icon_block}>
              <img src={phone} alt="" />
              <Typography variant="body2">
                +880 9876 543 210 <br />
                +880 9876 543 210
              </Typography>
            </div>
            <div className={classes.icon_block}>
              <img src={email} alt="" />
              <Typography variant="body2">
                info@dpay-email.com <br />
                info@dpay-email.com
              </Typography>
            </div>
            <div className={classes.icon_block}>
              <img src={pin} alt="" />
              <Typography variant="body2">
                ShareTrip Ltd. 3rd Floor, Taneem Square <br />
                158/E, Kemal Ataturk Avenue, <br />
                Banani, Dhaka 1213, Bangladesh
              </Typography>
            </div>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h6">Get Social</Typography>
            <div className={classes.icon_block_wrapper}>
              <div className={classes.icon_block}>
                <img src={facebook} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Facebook
                </Typography>
              </div>
              <div className={classes.icon_block}>
                <img src={twitter} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Twitter
                </Typography>
              </div>
              <div className={classes.icon_block}>
                <img src={linkedin} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Linkedin{" "}
                </Typography>
              </div>
              <div className={classes.icon_block}>
                <img src={youtube} alt="" />
                <Typography variant="body2" className={classes.hide}>
                  Youtube
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <div
          container
          className={classes.footer_bottom}
          // justifyContent="center"
          // alignContent="center"
        >
          <div>
            <Typography
              variant="body1"
              className={classes.copyright}
            >
              &copy; Copyrigt 2021. All Rights Reserved by Deshi
            </Typography>
          </div>
          <div className={classes.bottom_menu}>
            <Button variant="text" className={classes.menu_item}>
              <Typography variant="subtitle1">Help</Typography>
            </Button>
            <Button variant="text" className={classes.menu_item}>
              <Typography variant="subtitle1">Privacy & Policy</Typography>
            </Button>
            <Button variant="text" className={classes.menu_item}>
              <Typography variant="subtitle1">Terms & Condition</Typography>
            </Button>
            <Button variant="text" className={classes.menu_item}>
              <Typography variant="subtitle1">FAQ</Typography>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
