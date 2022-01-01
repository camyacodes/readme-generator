const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require('./src/readme-template.js')

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

promptUser()
	.then((answers) => {
		console.log(answers);

        const pageREADME = generateReadme(answers);
        
		fs.writeFile('./README.md', pageREADME, err => {
		  if (err) throw new Error(err);
		  console.log('Page created! Check out README.md in this directory to see it!');
		});
	});
