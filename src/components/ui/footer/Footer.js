import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
// import {ContactMail} from "@material-ui/icons"
import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  TextField,
  Avatar,
} from "@material-ui/core";
import theme from "../Theme";

import vilmateIcon from "../../../assets/images/vilmateIcon.svg";
import fb from "../../../assets/images/fb.png";
import linkedIn from "../../../assets/images/linkedIn.png";
import insta from "../../../assets/images/insta.png";

const RenderSocialIcon = ({ icon, url }) => (
  <Grid item>
    <Avatar src={icon} alt="Facebook logo" />
  </Grid>
);

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "#009C98",
    paddingBottom: "4em",
  },
  firstColumn: {
    marginTop: "3em",
    marginLeft: "5em",
    maxWidth: "15em",
    [theme.breakpoints.down("md")]: {
      maxWidth: "2em",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "3em",
    },
  },
  soIcons: {
    marginTop: "1.5em",
    marginBottom: "1.5em",
  },
  sendBtn: {
    display: "inline-block",
    border: "solid",
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 25,
    marginBottom: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 40,
    paddingRight: 40,
    color: "#fff",
    borderRadius: 3,
    "&:hover": {
      backgroundColor: "#DEDAD8",
      color: "black",
    },
  },
  menuItem: {
    lineHeight: 2.4,
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid
      item
      container
      alignItems={matchesMD ? "center" : undefined}
      justify={matchesMD ? undefined : "center"}
      direction={matchesMD ? "column" : "row"}
      className={classes.footerContainer}
    >
      {/* 1st column */}

      <Grid item lg>
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          style={{
            marginTop: "3em",
            marginLeft: matchesMD ? 0 : matchesLG ? "3em" : "5em",
            maxWidth: "15em",
          }}
        >
          <Grid item>
            <img src={vilmateIcon} alt="Logo" />
          </Grid>
          <Grid
            item
            spacing={3}
            container
            style={{ marginTop: "1.5em", marginBottom: "1.5em" }}
            justify={matchesMD ? "center" : undefined}
          >
            <RenderSocialIcon icon={fb} />
            <RenderSocialIcon icon={linkedIn} />
            <RenderSocialIcon icon={insta} />
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              align={matchesMD ? "center" : undefined}
            >
              © 2020 All rights reserved. <br />
              MODERN TECH SOL CORPORATION LTD
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{ color: "#fff" }}
              align={matchesMD ? "center" : undefined}
            >
              2nd office, 3rd floor, I-8 Markaz Islamabad, Pakistan, South Asia
            </Typography>
          </Grid>
          <Grid
            item
            container
            alignItems={matchesMD ? "center" : undefined}
            justify={matchesMD ? "center" : undefined}
          >
            <Button className={classes.sendBtn}>CONTACT US</Button>
          </Grid>
        </Grid>
      </Grid>
      {/*Ended 1st column */}

      {/*  2nd Column */}
      <Grid item lg>
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          style={{
            marginTop: "3em",
            marginLeft: matchesMD ? "2em" : matchesLG ? "3em" : "5em",
            maxWidth: "15em",
          }}
        >
          <Grid item>
            <Grid item>
              <Typography variant="h5">Top Services</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                Outsource Mobile App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                Software Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                Web Application Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                Mobile Application Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                iOS App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                QA & Testing
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                UI/UX Design
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Ended  2nd Column */}

      {/* 3rd Column */}
      <Grid item lg>
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction="column"
          style={{
            marginTop: "3em",
            marginLeft: matchesMD ? "2em" : matchesLG ? "3em" : "5em",
            maxWidth: "15em",
          }}
        >
          <Grid item>
            <Grid item>
              <Typography variant="h5">Technologies</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                Progressive Web App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                React Native App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                Native App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                JavaScript Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                Angular
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                React.js
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                C#/.NET Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                PHP
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                Python
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.menuItem} variant="subtitle2">
                Node.js
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*End of  3rd Column */}

      {/* 4th column  */}
      <Grid item lg>
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          justify="center"
          direction="column"
          style={{
            marginTop: "3em",
            marginRight: matchesSM ? 0 : matchesMD ? "2em" : "5em",
            maxWidth: "17em",
          }}
        >
          <Grid item>
            <Typography variant="h5" align={matchesMD ? "center" : undefined}>
              Our Offices
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">I-8 MarKaz, Islamabad</Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{ color: "#fff" }}
              align={matchesMD ? "center" : undefined}
            >
              2nd office, 3rd floor, I-8 Markaz Islamabad, Pakistan, South Asia
              <br />
              +92 051 493 8119
              <br /> dawoodahmad824@gmail.com
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: "3em" }}>
            <Typography variant="subtitle2">G-13, Islamabad</Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{ color: "#fff" }}
              align={matchesMD ? "center" : undefined}
            >
              2nd office, 3rd floor, I-8 Markaz Islamabad, Pakistan, South Asia
              <br />
              +92 051 434 3455
              <br /> iqtidargilani@gmail.com
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: "3em" }}>
            <Typography variant="subtitle2">Mingora, Swat</Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{ color: "#fff" }}
              align={matchesMD ? "center" : undefined}
            >
              2nd office, 3rd floor, I-8 Markaz Islamabad, Pakistan, South Asia
              <br />
              +92 051 0796 636
              <br /> kabir23@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/*End of  4th Column */}
    </Grid>
  );
}
