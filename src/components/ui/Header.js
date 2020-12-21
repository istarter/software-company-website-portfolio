import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTheme, fade } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

import logo from "../../assets/logo.svg";
import englishFlage from "../../assets/images/usa.png";
import swedenFlage from "../../assets/images/sweden.png";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.2em",
    },
  },
  logo: {
    height: "3em",
    marginLeft: "3em",
    [theme.breakpoints.down("md")]: {
      height: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 12,
    marginLeft: "2px",
  },
  searchTab: {
    ...theme.typography.tab,
    minWidth: 12,
    maxWidth: "10em",
    marginLeft: 0,
    border: "solid",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  flage: {
    ...theme.typography.tab,
    // minWidth: 10,
    // maxWidth: 10,
    marginLeft: 5,
  },
  button: {
    ...theme.typography.estimate,
    marginLeft: "50px",
    marginRight: "25px",
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.white,
    color: "white",
    borderRadius: "0px",
    marginTop: "5em",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    color: "black",
  },
  menuGrid: {
    marginLeft: "3em",
    marginBottom: "2em",
  },
  drawerIcon: {
    height: "40px",
    width: "40px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  tabMenuItem: {
    marginBottom: "0.5em",
  },
  contactBtn: {
    display: "inline-block",
    border: "solid",
    borderWidth: 1,
    borderColor: "#5d5143",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 40,
    paddingRight: 40,
    color: "#5d5143",
    borderRadius: 3,
    "&:hover": {
      backgroundColor: "#5d5143",
      color: "#fff",
    },
  },
}));

export default function Header({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState();
  const [anchorTechEl, setAnchorTechEl] = useState();
  const [openMenu, setOpenMenu] = useState(false);
  const [openTechMenu, setOpenTechMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const menuOptions = [
    {
      name: "Web Application Development",
      link: "/web-development",
      activeIndex: 1,
      selectedIndex: 0,
      variant: "h4",
    },
    {
      name: "Software Development",
      link: "/software-development",
      activeIndex: 1,
      selectedIndex: 1,
      variant: "h4",
    },
    {
      name: "Mobile Development",
      link: "/mobile-development",
      activeIndex: 1,
      selectedIndex: 2,
      variant: "h4",
    },
    {
      name: "iOS App Development",
      link: "/ios-development",
      activeIndex: 1,
      selectedIndex: 4,
      variant: "body1",
    },
    {
      name: "Android App Development",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 5,
      variant: "body1",
    },
  ];

  const menuUIOptions = [
    {
      name: "UI/UX DESIGN",
      link: "/ui-ux-design",
      activeIndex: 1,
      selectedIndex: 6,
      variant: "h4",
    },
    {
      name: "UI/UX DESIGN",
      link: "/ui-ux-design",
      activeIndex: 1,
      selectedIndex: 7,
      variant: "body1",
    },
    {
      name: "EMAIL DESIGN",
      link: "/email-design",
      activeIndex: 1,
      selectedIndex: 8,
      variant: "body1",
    },
    {
      name: "GRAPHIC DESIGN",
      link: "/graphic-design",
      activeIndex: 1,
      selectedIndex: 9,
      variant: "body1",
    },
    {
      name: "WEB DESIGN",
      link: "/web-design",
      activeIndex: 1,
      selectedIndex: 10,
      variant: "body1",
    },
  ];

  const menuQAOptions = [
    {
      name: "QA & Testing",
      link: "/QA-testing",
      activeIndex: 1,
      selectedIndex: 11,
      variant: "h4",
    },
    {
      name: "iOS App Testing",
      link: "/ios-testing",
      activeIndex: 1,
      selectedIndex: 12,
      variant: "body1",
    },
    {
      name: "Android App Testing",
      link: "/android-testing",
      activeIndex: 1,
      selectedIndex: 13,
      variant: "body1",
    },
    {
      name: "Web App Testing",
      link: "/web-testing",
      activeIndex: 1,
      selectedIndex: 14,
      variant: "body1",
    },
    {
      name: "Mobile App Testing",
      link: "/mobile-app-testing",
      activeIndex: 1,
      selectedIndex: 15,
      variant: "body1",
    },
    {
      name: "Software Testing",
      link: "/software-testing",
      activeIndex: 1,
      selectedIndex: 16,
      variant: "body1",
    },
  ];

  const menuConsultingOptions = [
    {
      name: "Consulting",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 17,
      variant: "h4",
    },
    {
      name: "Software Development Consulting",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 18,
      variant: "body1",
    },
    {
      name: "Web Development Consulting",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 19,
      variant: "body1",
    },
    {
      name: "Mobile App Development Consulting",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 20,
      variant: "body1",
    },
    {
      name: "Design Consulting",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 18,
      variant: "body1",
    },
    {
      name: "QA & Testing Consulting",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 21,
      variant: "body1",
    },
  ];

  const menuOSOptions = [
    {
      name: "Outsourcing Services",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 22,
      variant: "h4",
    },
    {
      name: "Outsource Softare Development",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 23,
      variant: "body1",
    },
    {
      name: "Outsource Web Development",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 24,
      variant: "body1",
    },
    {
      name: "Outsource Mobile App Development",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 25,
      variant: "body1",
    },
    {
      name: "Outsource Web Design",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 26,
      variant: "body1",
    },
    {
      name: "Outsource Softare Testing",
      link: "/android-development",
      activeIndex: 1,
      selectedIndex: 27,
      variant: "body1",
    },
  ];

  const allMenuOptions = [
    ...menuOptions,
    ...menuUIOptions,
    ...menuQAOptions,
    ...menuConsultingOptions,
    ...menuOSOptions,
  ];

  const routes = [
    { name: "HOME", link: "/", activeIndex: 0 },
    {
      name: "SERVICES",
      // link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    {
      name: "TECHNOLOGIES",
      // link: "/technologies",
      activeIndex: 2,
      ariaOwns: anchorEl ? "technology-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleTechClick(event),
    },
    { name: "PORTFOLIO", link: "/portfolio", activeIndex: 3 },
    { name: "BLOG", link: "/blog", activeIndex: 4 },
    { name: "CAREERS", link: "/careers", activeIndex: 5 },
    { name: "ABOUT US", link: "/about", activeIndex: 6 },
  ];

  useEffect(() => {
    [...allMenuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [
    value,
    allMenuOptions,
    menuOptions,
    menuConsultingOptions,
    menuOSOptions,
    menuQAOptions,
    menuUIOptions,
    selectedIndex,
    routes,
  ]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  function handleTechClick(e) {
    setAnchorTechEl(e.currentTarget);
    setOpenTechMenu(true);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleTechClose = (e) => {
    setAnchorTechEl(null);
    setOpenTechMenu(false);
  };

  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        className={classes.tabContainer}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
        <Tab
          icon={<SearchIcon />}
          aria-label="Search"
          className={classes.tab}
        />
        <Grid item container alignItems="center" justify="center">
          <Button className={classes.contactBtn}>CONTACT US</Button>
        </Grid>
        <img src={englishFlage} alt="english flage" className={classes.flage} />
        <img
          src={swedenFlage}
          alt="Sweden flage"
          className={classes.flage}
          style={{ marginRight: 35 }}
        />
      </Tabs>
      {/* services menu  */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClick={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Grid
          container
          className={classes.menuGrid}
          direction="row"
          style={{ backgroundColor: "#fff" }}
        >
          <Grid item style={{ marginLeft: "1em" }} lg>
            {menuOptions.map((option, index) => (
              <MenuItem
                key={`${option}${index}`}
                onClick={(event) => {
                  handleMenuItemClick(event, option.selectedIndex);
                  setValue(1);
                  handleClose();
                }}
                selected={index === selectedIndex && value === 1}
                component={Link}
                to={option.link}
                classes={{ root: classes.menuItem }}
              >
                <Typography variant={option.variant}>{option.name}</Typography>
              </MenuItem>
            ))}
          </Grid>
          <Grid item style={{ marginLeft: "1em" }} lg>
            {menuUIOptions.map((option, index) => (
              <MenuItem
                key={`${option}${index}`}
                onClick={(event) => {
                  handleMenuItemClick(event, option.selectedIndex);
                  setValue(1);
                  handleClose();
                }}
                selected={index === selectedIndex && value === 1}
                component={Link}
                to={option.link}
                classes={{ root: classes.menuItem }}
              >
                <Typography variant={option.variant}>{option.name}</Typography>
              </MenuItem>
            ))}
          </Grid>
          <Grid item style={{ marginLeft: "1em" }} lg>
            {menuQAOptions.map((option, index) => (
              <MenuItem
                key={`${option}${index}`}
                onClick={(event) => {
                  handleMenuItemClick(event, option.selectedIndex);
                  setValue(1);
                  handleClose();
                }}
                selected={index === selectedIndex && value === 1}
                component={Link}
                to={option.link}
                classes={{ root: classes.menuItem }}
              >
                <Typography variant={option.variant}>{option.name}</Typography>
              </MenuItem>
            ))}
          </Grid>
          <Grid item style={{ marginLeft: "1em" }} lg>
            {menuConsultingOptions.map((option, index) => (
              <MenuItem
                key={`${option}${index}`}
                onClick={(event) => {
                  handleMenuItemClick(event, option.selectedIndex);
                  setValue(1);
                  handleClose();
                }}
                selected={index === selectedIndex && value === 1}
                component={Link}
                to={option.link}
                classes={{ root: classes.menuItem }}
              >
                <Typography variant={option.variant}>{option.name}</Typography>
              </MenuItem>
            ))}
          </Grid>
          <Grid item style={{ marginLeft: "1em" }} lg>
            {menuOSOptions.map((option, index) => (
              <MenuItem
                key={`${option}${index}`}
                onClick={(event) => {
                  handleMenuItemClick(event, option.selectedIndex);
                  setValue(1);
                  handleClose();
                }}
                selected={index === selectedIndex && value === 1}
                component={Link}
                to={option.link}
                classes={{ root: classes.menuItem }}
              >
                <Typography variant={option.variant}>{option.name}</Typography>
              </MenuItem>
            ))}
          </Grid>
        </Grid>
      </Menu>
      {/* technology menus */}
      <Menu
        id="technology-menu"
        anchorEl={anchorTechEl}
        open={openTechMenu}
        onClick={handleTechClose}
        MenuListProps={{ onMouseLeave: handleTechClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Grid
          container
          className={classes.menuGrid}
          direction="row"
          style={{ backgroundColor: "#fff" }}
        >
          <Grid item style={{ marginLeft: "2em" }} lg>
            <Typography className={classes.tabMenuItem} variant="h4">
              BACK-END TECHNOLOGIES
            </Typography>
            <Typography className={classes.tabMenuItem} variant="body1">
              Python
            </Typography>
            <Typography className={classes.tabMenuItem} variant="body1">
              C#/.NET Development
            </Typography>
            <Typography className={classes.tabMenuItem} variant="body1">
              PHP
            </Typography>
            <Typography className={classes.tabMenuItem} variant="body1">
              Node.js
            </Typography>
          </Grid>
          <Grid item>
            <Grid item container direction="column">
              <Grid item>
                <Typography
                  variant="h4"
                  style={{ paddingLeft: 60, marginBottom: "1em" }}
                >
                  FRONTEND-END TECHNOLOGIES
                </Typography>
              </Grid>
              <Grid item container>
                <Grid item style={{ marginLeft: "2em" }} lg>
                  <Typography className={classes.tabMenuItem} variant="h4">
                    Web Technologies
                  </Typography>
                  <Typography className={classes.tabMenuItem} variant="body1">
                    JavaScript Development
                  </Typography>
                  <Typography className={classes.tabMenuItem} variant="body1">
                    Angular
                  </Typography>
                  <Typography className={classes.tabMenuItem} variant="body1">
                    React.js
                  </Typography>
                </Grid>
                <Grid item style={{ marginLeft: "2em", marginRight: "6em" }} lg>
                  <Typography className={classes.tabMenuItem} variant="h4">
                    Mobile Technologies
                  </Typography>
                  <Typography className={classes.tabMenuItem} variant="body1">
                    Progressive Web App Development
                  </Typography>
                  <Typography className={classes.tabMenuItem} variant="body1">
                    React Native App Development
                  </Typography>
                  <Typography className={classes.tabMenuItem} variant="body1">
                    Native App Development
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Menu>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={
                route.name === "SERVICES"
                  ? undefined
                  : () => {
                      setOpenDrawer(false);
                      setValue(route.activeIndex);
                    }
              }
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              style={{
                backgroundColor: theme.palette.common.blue,
                boxShadow: 0,
                borderRadius: "none",
              }}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {route.name === "SERVICES" ? (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{
                        backgroundColor: theme.palette.common.blue,
                        padding: 0,
                      }}
                    >
                      <Typography
                        variant="tab"
                        style={{ color: "#fff", marginTop: 0 }}
                      >
                        {route.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid item container direction="column">
                        {allMenuOptions.map((item, index) => (
                          <Grid
                            item
                            style={{ maxWidth: "14em", marginTop: "1em" }}
                          >
                            <Typography
                              key={index}
                              variant={item.variant}
                              selected={index === selectedIndex && value === 1}
                              component={Link}
                              to={item.link}
                              onClick={() => {
                                setOpenDrawer(false);
                                setValue(route.activeIndex);
                              }}
                            >
                              {item.name}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  route.name
                )}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="inherit" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              to="/"
              disableRipple
              onClick={() => setValue(0)}
            >
              <img src={logo} className={classes.logo} alt="Company Logo" />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
}
