import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import python from "../../../assets/images/python.png";
import angular from "../../../assets/images/angular.png";
import react from "../../../assets/images/react.png";
import android from "../../../assets/images/android.png";
import ios from "../../../assets/images/ios.png";
import nodejs from "../../../assets/images/nodejs.png";
import csharp from "../../../assets/images/cSharp.png";

import theme from "../Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  sliderImg: {
    height: 67,
    width: 67,
  },
}));

const tileData = [
  {
    img: python,
    title: "Python",
  },
  { img: angular, title: "Angular" },
  { img: react, title: "React.js" },
  { img: android, title: "Android" },
  { img: ios, title: "IOS" },
  { img: nodejs, title: "Node.js" },
  { img: csharp, title: "C#/.NET" },
];

export default function SingleLineGridList() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      item
      style={{
        maxWidth: matchesXS
          ? "20em"
          : matchesSM
          ? "35em"
          : matchesMD
          ? "50em"
          : undefined,
      }}
      className={classes.root}
    >
      <GridList className={classes.gridList} cols={10}>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            style={{ marginLeft: "2em", width: "4em", paddingTop: "3em" }}
          >
            <Typography variant="subtitle2">{tile.title}</Typography>
            <img
              src={tile.img}
              alt={tile.title}
              className={classes.sliderImg}
            />
          </GridListTile>
        ))}
      </GridList>
    </Grid>
  );
}
