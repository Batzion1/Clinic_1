import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';

import PatientsPage from './pages/PatientsPage/PatientsPage';
import KoronaPage from './pages/KoronaPage/KoronaPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Routes>
    <Route path='/' element={<PatientsPage></PatientsPage>}></Route>
    <Route path='/Vaccines' element={<KoronaPage></KoronaPage>}></Route>
    {/* <Route path='/employee' element={<KoronaPage></KoronaPage>}></Route> */}
    </Routes>
       </BrowserRouter>
 </div>
  );
}

export default App;
