const inquirer = require("inquirer");
// const fs = require("fs");
// const generateReadme = require('./src/readme-template.js')

// const pageREADME = generateReadme(projectTitle, description, installation, usage, license, contributing, tests, githubName, email);

// fs.writeFile(
// 	"README.md",
// 	pageREADME,
// 	(err) => {
// 		if (err) throw err;

// 		console.log(
// 			"Portfolio complete! Check out testREADME.html to see the output!"
// 		);
// 	}
// );

const promptUser = () => {
	return inquirer.prompt([
		{
			type: "input",
			name: "gitHubName",
			message: "what is GitHub username?",
		},
		{
			type: "input",
			name: "email",
			message: "what is email?",
		},
	]);
};

const promptProject = () => {
	return inquirer.prompt([
		{
			type: "input",
			name: "projectTitle",
			message: "What is your project title?",
		},
		{
			type: "input",
			name: "description",
			message: "Describe your project:",
		},
		{
			type: "input",
			name: "installation",
			message: "What are the steps required to install your project?",
		},
		{
			type: "input",
			name: "usage",
			message: "Provide instructions for use:",
		},
		{
			type: "checkbox",
			name: "license",
			message: "Select a license",
			choices: [
				{
					name: "MIT License",
				},
				{
					name: "ISC License",
				},
				{
					name: "Apache License 2.0",
				},
				{
					name: "GNU General Public License v3.0",
				},
			],
			validate(answer) {
				if (answer.length < 1) {
					return "You must choose at least one license.";
				}

				return true;
			},
		},
		{
			type: "input",
			name: "contributing",
			message: "Add guidelines for how to contribute to your project:",
		},
		{
			type: "input",
			name: "tests",
			message: "Add test instructions:",
		},
	]);
};

promptUser()
	.then((answers) => console.log(answers))
	.then(promptProject)
	.then((projectAnswers) => console.log(projectAnswers));
