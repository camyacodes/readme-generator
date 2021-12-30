const generateReadme = (projectTitle, githubName, email) => {
	return `
    # ${projectTitle}

    ## Questions
    Checkout my GitHub: ${githubName}
    You can reach me at ${email}
`;
};

module.exports = generateReadme;