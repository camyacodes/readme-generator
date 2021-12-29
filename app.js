// const readmeDataArgs = process.argv.slice(2, process.argv.length);

// const readmeData = readmeDataArr => {
//     readmeDataArr.forEach(readmeItem => console.log(readmeItem));
//   };

// printReadmeData(readmeDataArgs);

const generateReadme = (userName, githubName) => {
    return `
    Name: ${userName}
    Github: ${githubName}
`;
};

console.log(generateReadme("mya", "bb inc"));
