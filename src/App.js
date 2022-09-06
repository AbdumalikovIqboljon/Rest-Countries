import React from 'react'
import Countries from './components/Countries';
import Error from "./components/Error";
import Country from "./components/Country";
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
    
      <Header />
      <Routes>
        
        <Route path="/" exact element={<Countries />} />
        <Route path="/:name" element={<Country />}></Route>
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}
