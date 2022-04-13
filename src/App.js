import React from 'react';

import Students from './pages/Students/Students';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import './index.css';

function App() {
  return (
    <Container>
      <Header />
      <Students />
    </Container>
  );
}

export default App;
