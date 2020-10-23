const inquirer = require ("inquirer")
const fs = require ("fs")
const path = require ("path")
const generateMarkdown = require ("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input", 
        message: "What's the name of your project?", 
        name: "title"
        
    },
    {
        type: "input", 
        message: "What even is this for?", 
        name: "description"
        
    },

    {
        type: "input", 
        message: "What's your table of contents?", 
        name: "contents"
        
    },
    {
        type: "input", 
        message: "What are your installation instructions", 
        name: "install"
        
    },
    {
        type: "input", 
        message: "What will you use this for?", 
        name: "usage"
        
    },
    {
        type: "input", 
        message: "What's your license?", 
        name: "license"
        
    },
    {
        type: "input", 
        message: "Who contributed?", 
        name: "contributed"
        
    },
    {
        type: "input", 
        message: "Any tests?", 
        name: "tests"
        
    },
    {
        type: "input", 
        message: "Any questions?", 
        name: "questions"
        
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
    
}

// function to initialize program
function init() {

inquirer.prompt(questions).then(answers=> {
    const data = generateMarkdown(answers)
    writeToFile("newfile.md", data)
})

}

// function call to initialize program
init();
