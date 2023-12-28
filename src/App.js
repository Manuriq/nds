import React from 'react';
import Home from './Home.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './create/Create.jsx';
import Update from './create/Update.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;