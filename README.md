# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).



TO DO:

[x] Add images to public/images folder
[x] Modify galleryItems array (in `server/modules/data.js`) to include an `id`, `title`, `description` and `path for`
[x] Use axios to GET data from '/gallery' and store in App.jsx
[x] Create component for GalleryList, pass in gallery data stored in 'App' via props
    - [x] Iterate over list of gallery data (.map)
    - [ ] Make GalleryItems 
[ ] Create component for GalleryItem, pass it the individual gallery item via props
    - [ ] Update 'GalleryList' to use this component to display an image
    - [ ] Swap the image with the description on click (use conditional rendering)
    - [ ] Display number of loves and include love button
    - [ ] When love button is clicked, use axios to update (PUT) the love count '/gallery/like/:id'
    - [ ] Update the gallery each time a like button is clicked (run function associated with GET route)