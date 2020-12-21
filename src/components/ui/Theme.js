import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcWhite = "#fff";
const arcOrange = "#FFBA60";
const arcGray = "#868686";
const arcAqua = "#009c98";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
      white: `${arcWhite}`,
    },
    primary: {
      main: `${arcWhite}`,
    },
    secondary: {
      main: `${arcAqua}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Arial Narrow",
      textTransform: "none",
      fontWeight: 400,
      fontSize: "1rem",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.7rem",
      color: arcWhite,
      lineHeight: 1.4,
    },
    h3: {
      fontFamily: "pacifico",
      fontSize: "2rem",
      color: arcAqua,
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: "1.1rem",
      color: "black",
      fontWeight: 700,
      // backgroundColor: arcWhite,
    },
    h5: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      color: "white",
      fontWeight: 700,
      // backgroundColor: arcWhite,
    },
    h6: {
      fontFamily: "Montserrat",
      fontSize: "1.2rem",
      color: arcGray,
      fontWeight: 400,
      lineHeight: 1.2,
      // backgroundColor: arcWhite,
    },
    subtitle1: {
      fontSize: "1.2rem",
      fontWeight: 300,
      color: arcGray,
    },
    subtitle2: {
      fontSize: "0.95rem",
      fontWeight: 500,
      color: "white",
    },
    subtitle3: {
      fontSize: "1rem",
      fontWeight: 500,
      color: arcAqua,
    },
    body1: {
      fontSize: "0.9rem",
      color: "black",
      fontWeight: 300,
    },
    body2: {
      fontSize: "0.9rem",
      color: arcGray,
      fontWeight: 400,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 700,
      color: "black",
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    learnButton: {
      borderColor: arcBlue,
      borderRadius: 50,
      color: arcBlue,
      borderWidth: 2,
      testTransform: "none",
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: arcGray,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcOrange}`,
        },
      },
    },
  },
});
