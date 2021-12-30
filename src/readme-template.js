const generateReadme = (projectTitle, description, installation, usage, license, contributing, tests, githubName, email) => {
	return `
    # ${projectTitle}
 
    ## Description

    ${description}
    
    ## Table of Contents (Optional)
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questiona](#questions)
    
    ## Installation

    ${installation}
    
    ## Usage 

    ${usage}
    
    ## License
    
    ${license}

    ## Contributing
    
    ${contributing}

    ## Tests
    
    ${tests}

    ## Questions

    GitHub profile: https://github.com/${githubName}

    Contact email: ${email}
`;
};

module.exports = generateReadme;

