import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


// import components
import GalleryList from '../GalleryList/GalleryList.jsx';


function App() {
  const [galleryList, setGalleryList] = useState([]);

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
    // set state
    setGalleryList(response.data);
    }).catch((error) => {
    console.log('GET /gallery failed', error);
    });
  }; // end fetchGallery


  // create function for axios PUT route
  const addLikes = (photoId) => {  
    axios({
            method: 'PUT',
            url: `/gallery/like/${photoId}`,
        }).then((response) => {
            console.log('PUT route success');
            fetchGallery();
        }).catch((error) => {
            console.error('PUT route', error)
        })
    } // end addLikes;

    
  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        <GalleryList galleryList={galleryList}
        addLikes={addLikes}/>

      </div>
    );
  }; // end App

export default App;
