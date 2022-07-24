import CommodityList from "./components/CommodityList";
import { Container, useColorMode } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import React from "react";
import { LastUpdateProvider } from "./context/LastUpdateContext";

function App() {
  return (
    <>
      <Navbar />
      <Container maxW="7xl" mt="2em">
        <LastUpdateProvider>
          <Jumbotron />
          <CommodityList />
        </LastUpdateProvider>
      </Container>
    </>
  );
}

export default App;
