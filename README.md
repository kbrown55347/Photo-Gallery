# Photo Gallery

## Description

*Duration: 3 day sprint*

I created a gallery page of pictures to showcase important people, places and things in my life. Visitors can click on an image to view a description of that photo and click a button to "love" an image.

To accomplish this, I first used an `axios` `GET` route to retrieve the image data. I then created a component to pass in the gallery data via `props`. In this component, I wrote a function to iterate through each photo within the gallery data. Next, I created another component and passed it each individual gallery item using `props`. Within this component, I wrote functions to display each image, change the image for its description on a click, include a love button for each photo and display the number of loves each photo gets. Then I used an `axios` `PUT` route to update the server and store the data each time a 'love' button is clicked for a photo. Lastly, I spiced up the page by adding some styling with Material-UI and CSS.

![Working Image](/public/images/GalleryOfMyLife.gif)

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

1. Open your editor of choice and run an `npm install` in your terminal to install the project's node dependencies.

2. Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`. 

3. Run `npm run server` in your terminal to start the server.

4. Open a new terminal tab and run `npm run client` to start the react client app.

## Usage

1. Click on an image to view its description. Click on the description to display the image again.

2. Click on the green and white heart button below a picture to love it. The number of people who have loved a photo is listed underneath it. 

## Built With

- HTML/CSS
- JavaScript
- React
- Node.js
- Express.js
- Material-UI

## Acknowledgment

Thank you to Prime Digital Academy, my instructor Matthew Black, and my classmates who equipped and helped me to create this application.

## Support

If you have suggestions or issues, please email me at kbrown55347@gmail.com.
