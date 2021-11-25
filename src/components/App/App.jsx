import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

// import components


function App() {

  // The equivalent to $(document).ready(onReady);
  useEffect(() => {
  // Call fetchGallery on load (and only once, on load)
    fetchGallery();
  }, []);

  // create function to fetch gallery
  const fetchGallery = () => {
    // axios GET /gallery route
    axios({
    method: 'GET',
    url: '/gallery'
    }).then((response) => {
    console.log('in GET /gallery route', response.data);
    }).catch((error) => {
    console.log('GET /gallery failed', error);
    });
  }; // end fetchGallery
    
  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
  } // end App

export default App;
