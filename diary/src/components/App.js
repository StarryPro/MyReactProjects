import Calender from "../routes/calender";
import { createGlobalStyle } from "styled-components";
import Write from "./write";
import AppRouter from "./AppRouter";
import React, { useEffect, useState } from "react";
import { authService } from "fbase";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;    
  }
  body {
    box-sizing: border-box;
  }
`;

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("authService.currentUser:", authService.currentUser);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      <GlobalStyle />
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "로딩중.."}
    </>
  );
}

export default App;
