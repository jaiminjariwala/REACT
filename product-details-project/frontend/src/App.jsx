// App component is the entry point of our application.

import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";

function App() {

  return (
    <>
      {/* "Box" here is like "div" */}
      <Box minH={"100vh"}  bgColor={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
