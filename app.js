const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadme = require('./utils/readme-template.js')
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the user questions to populate the README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project."
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any.",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions for use."
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project: ",
            choices: [
                "Apache",
                "GNU",
                "ISC",
                "MIT",
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Add guidelines for how to contribute to your project."
        },
        {
            type: "input",
            name: "tests",
            message: "Add test instructions(if any)."
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 

// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init(); 