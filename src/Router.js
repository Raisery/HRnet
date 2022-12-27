import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Employee from './pages/Employee';
import Home from './pages/Home/'

export default function Router() {
  return (
    <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/Employee" element={<Employee />} />
            </Routes>
        </BrowserRouter>
  );
}
