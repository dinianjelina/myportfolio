import React from 'react';
import Component from './routes/component';
import DetailProject from './routes/detailProject';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Component />} />
        <Route path="/detail" element={<DetailProject />} />
      </Routes>
    </Router>
  );
};

export default App;
