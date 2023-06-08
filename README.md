# jokegenie
It utilizes React functional components and hooks for state management and handling side effects.
The app makes use of the useState hook to manage the meme and allMemes state variables.
It uses the useRef hook to create references for accessing and manipulating DOM elements.
The app fetches meme data from an external API using the fetch function within the useEffect hook.
The fetched meme data is stored in the allMemes state variable.
The app dynamically adjusts the scale and position of the text within the meme image using the fitTextInImage function and the useEffect hook with a dependency on meme.randomImage.
User input for the top and bottom text of the meme is captured using input elements and the handleChange function.
The app generates a new meme image by randomly selecting an image URL from the allMemes array using the getMemeImage function.
The selected meme image URL is stored in the randomImage property of the meme state variable.
The app renders the meme image, along with the top and bottom text, using appropriate class names and the memeTopTextRef and memeBottomTextRef references.
