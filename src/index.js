// Define displayPoem 
function displayPoem(response) {
    console.log("poem generated");
    //response.data.answer
    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1, 
    cursor: "",
    });
}

// Clicking the button generates a new AI poem
function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");

    // Build the API URL
    let apiKey = 
        "00t0518374baoeb3faaa6c86b66cc02f";
    let prompt = 
        `User instructions: Generate a poem about ${instructionsInput.value}`;
    let context = 
        "You are a Poem expert and love to write short poems, using correct spacing between lines. Your mission is to generate a 4 line poem using basic HTML with correct spacing and stanzas, with each new line separate from one another. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem. Do not input the text HTML with any additional characters or a title, only write the poem and signature.";
    let apiURL = 
        `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("generating poem");
    console.log(`Prompt ${prompt}`);
    console.log(`Context ${context}`);
    // Make a call to the API with axios
    axios.get(apiURL).then(displayPoem);
    // Display the generated poem

}
 //target form so that when the submit button is clicked it generates a poem
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);