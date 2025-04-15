import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import DarkThemeProvider from "./DarkThemeProvider";
import DarkThemeToggle from "./DarkThemeToggle";
import "./App.css";

const backgroundColor = theme("theme", {
  light: "#ffffff",
  dark: "#2d2d2d",
});

const fontColor = theme("theme", {
  light: "#000000",
  dark: "#ffffff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${fontColor};
`;

const SwitchTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 75px;
`;

const App = () => {
  return (
    <ReduxProvider store={store}>
      <DarkThemeProvider>
        <React.Fragment>
          <SwitchTheme>
            <h1>Theme App</h1>
            <DarkThemeToggle />
          </SwitchTheme>
          <Container>
            <h2>Welcome!</h2>
            <h3>Full Stack Web Development</h3>
          </Container>
        </React.Fragment>
      </DarkThemeProvider>
    </ReduxProvider>
  );
};

export default App;
