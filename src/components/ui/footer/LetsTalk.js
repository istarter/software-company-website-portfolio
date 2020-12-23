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

import letsTalkbg from "../../../assets/images/back1.jpg";
// import logo from "../images/logoT.svg";
// import fb from "../images/fb.png";
// import linkedIn from "../images/linkedIn.png";
// import insta from "../images/insta.png";
import theme from "../Theme";

const useStyles = makeStyles((theme) => ({
  letsTalkBG: {
    backgroundImage: `url(${letsTalkbg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    padding: "80px 0 40px",
    backgroundRepeat: "no-repeat",
  },
  letsTitle: {
    fontSize: "72px",
    lineHeight: "98px",
    fontWeight: 700,
    color: "#fff",
  },
  emailInput: {
    width: "80%",
    borderRadius: 3,
    height: "1.9em",
    backgroundColor: "#FFFFFF",
    marginLeft: "5em",
    fontSize: "1.5rem",
    fontWeight: 500,
    color: "black",
    "&:hover": {
      border: "solid",
      borderWidth: 1,
      borderColor: "black",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "2em",
      //  marginRight: "2em",
    },
  },
  textArea: {
    width: "80%",
    borderRadius: 7,
    backgroundColor: "#FFFFFF",
    marginLeft: "5em",
    fontSize: "1.5rem",
    fontWeight: 500,
    color: "black",
    "&:hover": {
      border: "solid",
      borderWidth: 1,
      borderColor: "black",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "2em",
    },
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

export default function LetsTalk() {
  const classes = useStyles();
  const theme = useTheme();

  // Media Quries
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  // end of Media Quries

  // State
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    let valid;

    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item className={classes.letsTalkBG}>
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            justify="center"
            className={classes.letsTitle}
          >
            LET'S TALK
          </Typography>
        </Grid>

        <Grid item>
          <Typography align="center" variant="subtitle2" paragraph>
            We would be delighted to discuss your project with you.
          </Typography>
          <Typography align="center" variant="subtitle2" paragraph>
            Just drop us a line and we will get back to you in the shortest
            possible time.
          </Typography>
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <TextField
              className={classes.emailInput}
              id="email"
              placeholder="Email"
              error={emailHelper.length !== 0}
              helperText={emailHelper}
              InputProps={{ disableUnderline: true }}
              value={email}
              onChange={onChange}
            />
          </Grid>
          <Grid item style={{ marginTop: "2em" }}>
            <TextField
              placeholder="How we can help"
              id="message"
              multiline
              rows={8}
              className={classes.textArea}
              InputProps={{ disableUnderline: true }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item container justify="center" alignItems="center">
            <Button className={classes.sendBtn}>SEND REQUEST</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
