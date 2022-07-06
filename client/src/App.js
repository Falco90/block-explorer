import Header from "./Header";
import React from "react";
import { Container } from "@chakra-ui/react";
import Routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Container centerContent maxW={900}>
      <Router>
        <Header />
        <Routes></Routes>
      </Router>
    </Container>
  );
}

export default App;
