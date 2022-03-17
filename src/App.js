import React from "react";
import { Route, Routes } from "react-router-dom";

import Students from "./pages/Students/Students";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

import data from './components/Table/utilit.json';


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/students" element={<Students items={data}/>} />
      </Routes>
    </Container>
  );
}

export default App;
