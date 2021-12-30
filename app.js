const generateReadme = require('./src/readme-template.js')

const fs = require("fs");

const readmeDataArgs = process.argv.slice(2, process.argv.length);

const [projectTitle, githubName, email] = readmeDataArgs;

// const readmeData = readmeDataArr => {
//     readmeDataArr.forEach(readmeItem => console.log(readmeItem));
//   };

// printReadmeData(readmeDataArgs);



fs.writeFile(
	"README.md",
	generateReadme(projectTitle, githubName, email),
	(err) => {
		if (err) throw err;

		console.log(
			"Portfolio complete! Check out testREADME.html to see the output!"
		);
	}
);
