import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Home from "./components/home/home.jsx"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/about/about.jsx';
import Albums from './components/albums/albums.jsx';
import AlbumDetails from './components/albums/albumDetails.jsx';
import AlbumDetailsPhotos from './components/albums/albumPhotos.jsx';


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/albums' element={<Albums/>}/>
        <Route path="/albums/:id" element={<AlbumDetails/>} />
        <Route path="/albums/:id/photos" element={<AlbumDetailsPhotos/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;

