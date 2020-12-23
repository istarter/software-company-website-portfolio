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
            marginLeft: matchesMD ? "2em" : matchesLG ? "3em" : "5em",
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
          >
            <RenderSocialIcon icon={fb} />
            <RenderSocialIcon icon={linkedIn} />
            <RenderSocialIcon icon={insta} />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              © 2020 All rights reserved. <br />
              MODERN TECH SOL CORPORATION LTD
            </Typography>
          </Grid>
          <Grid item>
            <Typography style={{ color: "#fff" }}>
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
            <Grid item marginTop="2">
              <Typography variant="subtitle2" style={{ fontSize: 14 }}>
                Outsource Mobile App Development
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Ended  2nd Column */}
    </Grid>
  );
}
