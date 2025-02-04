import React  from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import  { Route, BrowserRouter, Routes } from 'react-router-dom';
import Auth from './components/auth';
import { CookiesProvider } from 'react-cookie';


function Root(){
        

        const routing = (
        <CookiesProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Auth/>}/>
                <Route path="/movies" element= {<App/>}/>
              </Routes>
            </BrowserRouter>
          </CookiesProvider>
        );
        return routing;
}



createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
    <Root/>
  </React.StrictMode>,
);
