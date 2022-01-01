const inquirer = require("inquirer");
const fs = require("fs");
// // // const generateReadme = require('./src/readme-template.js')

// // // const pageREADME = generateReadme(projectTitle, description, installation, usage, license, contributing, tests, githubName, email);

// // // fs.writeFile(
// // // 	"README.md",
// // // 	pageREADME,
// // // 	(err) => {
// // // 		if (err) throw err;

// // // 		console.log(
// // // 			"Portfolio complete! Check out testREADME.html to see the output!"
// // // 		);
// // // 	}
// // // );



const inquirer = require("inquirer");

const promptUser = () => {
	return inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "What is your name? (Required)",
			validate: (nameInput) => {
				if (nameInput) {
					return true;
				} else {
					console.log("Please enter your name!");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "github",
			message: "Enter your GitHub Username (Required)",
			validate: (githubInput) => {
				if (githubInput) {
					return true;
				} else {
					console.log("Please enter your GitHub username!");
					return false;
				}
			},
		},
	]);
};

const promptProject = (portfolioData) => {
	console.log(`
=================
Add a New Project
=================
`);

	// If there's no 'projects' array property, create one
	if (!portfolioData.projects) {
		portfolioData.projects = [];
	}
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is the name of your project? (Required)",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("You need to enter a project name!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "description",
				message: "Provide a description of the project (Required)",
				validate: (descriptionInput) => {
					if (descriptionInput) {
						return true;
					} else {
						console.log("You need to enter a project description!");
						return false;
					}
				},
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
					"MIT License",
					"ISC License",
					"Apache License 2.0",
					"GNU General Public License v3.0",
				],
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
            
		])
		.then((projectData) => {
			portfolioData.projects.push(projectData);
			if (projectData.confirmAddProject) {
				return promptProject(portfolioData);
			} else {
				return portfolioData;
			}
		});
};

promptUser()
	.then(promptProject)
	.then((portfolioData) => {
		console.log(portfolioData);
		// will be uncommented in lesson 4
		// const pageHTML = generatePage(portfolioData);
		// fs.writeFile('./index.html', pageHTML, err => {
		//   if (err) throw new Error(err);
		//   console.log('Page created! Check out index.html in this directory to see it!');
		// });
	});
