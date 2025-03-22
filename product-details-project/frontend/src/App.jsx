// App component is the entry point of our application.

import { Box, Button } from "@chakra-ui/react";
import { Routes } from "react-router-dom";

function App() {

  return (
    <>
      {/* Box here is like "div" */}
      <Box minH={"100vh"}>
        <Navbar />
        <Routes path="/" element={<Homepage />} />
        <Routes path="/create" element={<CreatePage />} />
      </Box>
    </>
  );
}

export default App;
