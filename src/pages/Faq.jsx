import React, { useEffect } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckIcon from "@mui/icons-material/Check";
import HeaderOthers from "../components/HeaderOthers";
import Footer from "../components/Footer";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "60px 0px",
  },
  title: {
    fontSize: "1.5rem !important",
    fontWeight: "500 !important",
    marginBottom: "20px !important",
  },
  content: {
    fontSize: "1rem",
    marginBottom: "20px !important",
  },
  subtitle: {
    fontSize: "1rem",
    marginBottom: "20px !important",
    fontWeight: "500 !important",
  },

  icon: {
    marginRight: 10,
    position: "relative",
    top: 5,
  },
  select: {
    marginBottom: 30,
  },
  footer: {
    marginTop: "-80px",
  },
}));

const Faq = () => {
  const classes = useStyle();

  const location = useLocation();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    // let path = "/faq";
    // let pathName = location.pathname;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderOthers title="Freaquently Ask Question" />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography>
                    Can I Receive Payments From Personal Deshi Account?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    DESHI is a financial technology service provider wallet,
                    licensed as a Payment Service Provider (PSP) by Bangladesh
                    Bank. The purpose of the app is to keep the society
                    cashless, make life convenient and to provide seamless and
                    secure Digital Financial and Lifestyle Services.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content2"
                  id="panel1bh-header2"
                >
                  <Typography>
                    Can my customer save a PDF copy of an invoice I sent?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    DESHI is a financial technology service provider wallet,
                    licensed as a Payment Service Provider (PSP) by Bangladesh
                    Bank. The purpose of the app is to keep the society
                    cashless, make life convenient and to provide seamless and
                    secure Digital Financial and Lifestyle Services.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content3"
                  id="panel1bh-header3"
                >
                  <Typography>
                    Are there any limits to what I can transfer into the
                    account?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    DESHI is a financial technology service provider wallet,
                    licensed as a Payment Service Provider (PSP) by Bangladesh
                    Bank. The purpose of the app is to keep the society
                    cashless, make life convenient and to provide seamless and
                    secure Digital Financial and Lifestyle Services.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content4"
                  id="panel1bh-header4"
                >
                  <Typography>
                    Can I transfer money from my PayPal account to my Revolut
                    Business card?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    DESHI is a financial technology service provider wallet,
                    licensed as a Payment Service Provider (PSP) by Bangladesh
                    Bank. The purpose of the app is to keep the society
                    cashless, make life convenient and to provide seamless and
                    secure Digital Financial and Lifestyle Services.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content5"
                  id="panel1bh-header5"
                >
                  <Typography>
                    Can I transfer money from my PayPal account to my Revolut
                    Business card?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    DESHI is a financial technology service provider wallet,
                    licensed as a Payment Service Provider (PSP) by Bangladesh
                    Bank. The purpose of the app is to keep the society
                    cashless, make life convenient and to provide seamless and
                    secure Digital Financial and Lifestyle Services.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Faq;
