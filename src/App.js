import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Students from './pages/Students/Students';
import Container from './components/Container/Container';
import Header from './components/Header/Header';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/students" element={<Students />} />
      </Routes>
    </Container>
  );
}

export default App;
