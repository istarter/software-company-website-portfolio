import React from "react";
// import { Link } from "react-router-dom";
import {
  makeStyles,
  // useTheme,
} from "@material-ui/styles";
import {
  Grid,
  Typography,
  // useMediaQuery,
} from "@material-ui/core";

import HeroSection from "../components/ui/HomePage/HeroSection";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "4em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* Top section */}
      <HeroSection />
    </Grid>
  );
}
