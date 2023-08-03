import React from 'react';
import './App.css';
import CountryDataPage from './components/countrydata/CountryDataPage';
import { Route, Routes } from 'react-router-dom'
import CountryDetails from './components/countrydetails/CountryDetails';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CountryDataPage />} />
        <Route path='/country_details' element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
