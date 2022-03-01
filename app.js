// import functions
// jk, no functions to import
// grab DOM elements
const showButton = document.getElementById('btn');
const animal = document.getElementById('animalDiv');
/// console.log(showButton, animal, 'validate to make sure we grabbed them')
// set event listeners
showButton.addEventListener('click', () => {
    // console.log('show button clicked', 'validate button is connected')
     /// this will remove the hidden class and display your favorite animal.       
    animal.classList.remove('hidden');
});

.hidden {
    display: none;
};

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
