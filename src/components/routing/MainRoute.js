import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../ui/Header";
import theme from "../ui/Theme";
import LetsTalk from "../ui/footer/LetsTalk";
import Footer from "../ui/footer/Footer";

function MainRoute() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            // render={(props) => (
            //   <Home
            //     {...props}
            //     setValue={setValue}
            //     setSelectedIndex={setSelectedIndex}
            //   />
            // )}
            component={() => <div>Home</div>}
          />

          <Route
            exact
            path="/web-development"
            // render={(...props) => (
            //   <WebDevelopment
            //     {...props}
            //     setValue={setValue}
            //     setSelectedIndex={setSelectedIndex}
            //   />
            // )}
            component={() => <div>Web Development</div>}
          />
          <Route
            exact
            path="/software-development"
            // render={(...props) => (
            //   <SoftwareDevelopment
            //     {...props}
            //     setValue={setValue}
            //     setSelectedIndex={setSelectedIndex}
            //   />
            // )}
            component={() => <div>Web Development</div>}
          />
          <Route
            exact
            path="/mobile-development"
            // render={(...props) => (
            //   <MobileAppDevelopment
            //     {...props}
            //     setValue={setValue}
            //     setSelectedIndex={setSelectedIndex}
            //   />
            // )}
            component={() => <div>Web Development</div>}
          />
          <Route
            exact
            path="/ios-development"
            // render={(...props) => (
            //   <IOSDevelopment
            //     {...props}
            //     setValue={setValue}
            //     setSelectedIndex={setSelectedIndex}
            //   />
            // )}
            component={() => <div>Web Development</div>}
          />
          <Route
            exact
            path="/android-development"
            // render={(...props) => (
            //   <AndroidDevelopment
            //     {...props}
            //     setValue={setValue}
            //     setSelectedIndex={setSelectedIndex}
            //   />
            // )}
            component={() => <div>Web Development</div>}
          />
          <Route
            exact
            path="/ui-ux-design"
            // render={(...props) => (
            //   <UIUXDesign
            //     {...props}
            //     setValue={setValue}
            //     setSelectedIndex={setSelectedIndex}
            //   />
            // )}
            component={() => <div>Web Development</div>}
          />
          <Route
            exact
            path="/email-design"
            // render={(...props) => (
            //   <EmailDesign
            //     {...props}
            //     setValue={setValue}
            //     setSelectedIndex={setSelectedIndex}
            //   />
            // )}
            component={() => <div>Web Development</div>}
          />
          <Route
            exact
            path="/portfolio"
            // render={(...props) => (
            //   <Portfolio
            //     {...props}
            //     setValue={setValue}
            //     setSelectedIndex={setSelectedIndex}
            //   />
            // )}
            component={() => <div>Web Development</div>}
          />
          <Route
            exact
            path="/blog"
            // render={(...props) => (
            //   <Blog
            //     {...props}
            //     setValue={setValue}
            //     setSelectedIndex={setSelectedIndex}
            //   />
            // )}
            component={() => <div>Web Development</div>}
          />
          <Route
            exact
            path="/careers"
            // render={(...props) => (
            //   <Careers
            //     {...props}
            //     setValue={setValue}
            //     setSelectedIndex={setSelectedIndex}
            //   />
            // )}
            component={() => <div>Web Development</div>}
          />
          <Route
            exact
            path="/about"
            // render={(...props) => (
            //   <AboutUs
            //     {...props}
            //     setValue={setValue}
            //     setSelectedIndex={setSelectedIndex}
            //   />
            // )}
            component={() => <div>Web Development</div>}
          />
        </Switch>
        <LetsTalk />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default MainRoute;
