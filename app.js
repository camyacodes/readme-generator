const inquirer = require('inquirer');
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

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
