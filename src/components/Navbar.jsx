import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import menu_icon from "../assets/images/menu_icon.png";


const useStyle = makeStyles((theme) => ({
  menu_item: {
    // color: "#fff !important",
    padding: "20px 20px !important",
    borderBottom: "1px solid #ddd !important",
    color: "#000 !important",
    "& a": {
      color: "#000",
      textDecoration: "none",
    },
  },
  menu_icon: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icon: {
    color: "#666",
    fontSize: 50,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function NavBar() {
  const classes = useStyle();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={classes.menu_icon}>
            <Button onClick={toggleDrawer(anchor, true)}>
              {/* <MenuIcon className={classes.icon} /> */}
              <img src={menu_icon} alt="" />
            </Button>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Button
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              Overview
            </Button>
            <Button
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              Documentation
            </Button>
            <Button
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              Use Case
            </Button>
            <Button
              variant="text"
              className={classes.menu_item}
              onClick={toggleDrawer(anchor, false)}
            >
              <a href="#pricing">Pricing</a>
            </Button>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
