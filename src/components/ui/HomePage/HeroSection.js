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
import HeroSliderLanguges from "./HeroSliderLanguges";
import HeroBg from "../../../assets/images/hero-bg.jpg";

const useStyles = makeStyles((theme) => ({
  heroBG: {
    backgroundImage: `url(${HeroBg})`,
    maxWidth: "100%",
    backgroundPosition: " center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "40em",
  },
  heroSubText: {
    fontSize: 14,
    color: "white",
    paddingTop: 10,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
  heroSubTextTechnology: {
    paddingTop: "10em",
    color: "white",
  },
}));

export const HeroSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid item className={classes.heroBG}>
      <Grid item container direction="column">
        <Grid item>
          <Typography
            variant={matchesSM ? "h5" : "h2"}
            style={{ marginTop: "5em" }}
            align="center"
          >
            BUILDING SOFTWARE WITH PASSION AND QUALITY
          </Typography>
        </Grid>
        <Grid item align="center">
          <Typography className={classes.heroSubText}>
            THE UKRAINIAN TECH COMPANY PROVIDING OFFSHORE SOFTWARE DEVELOPMENT
            SERVICES TO HELP YOU ENGINEER YOUR SUCCESS
          </Typography>
        </Grid>
        <Grid item align="center">
          <Typography className={classes.heroSubTextTechnology}>
            WE KNOW ALL ABOUT THE LATEST TECHNOLOGY TRENDS
          </Typography>
        </Grid>
        <Grid item align="center">
          <Grid item>
            <HeroSliderLanguges />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
