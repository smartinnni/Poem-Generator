function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
    strings: "I’m Yertle the Turtle!",
    autoStart: true,
    delay: 1, 
    cursor: "",
    });
    
    poemElement.innerHTML = "I’m Yertle the Turtle!";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);