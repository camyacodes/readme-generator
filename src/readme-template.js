// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle}</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
This application is covered by the ${answers.license} license. 
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
Email me with any questions: ${answers.email}<br /><br />
Find me on GitHub: (https://github.com/${answers.username})<br />
<br />
    `;
  }
  
  module.exports = generateReadme;
