// Returns a license badge based on which license is passed in
// If user selects 'none' for license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
        return "";
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
}

// Returns the license link in table of contents
// If user selects 'none' for license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return "";
  } else {
    return `- [License](#license)`
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return "";
  } else {
    return `## License 

This project is covered under ${license}. For more information on licenses please 
click [here](https://choosealicense.com/).`
  }
}

// Returns instructions on how another developer can contribute to the project if contributions are accepted
function contributingSection(instructions) {
  //if no instructions are given
  if (!instructions) {
    return `I am currently not taking contributions from other developers right now, but please feel free to contact me with questions.`
  } else {
    //if instructions are given
    return `Like what you see? Here are guidelines for how you can contribute to this project:
    ${instructions}`
  }
}

// Generates markdown for README
// Formatted to be inline with the function so that the README.md file generates in a proper format without indentation
// Previous functions called on by placing the function and its arguments in template literals
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.confirmDescription === false ? data.description : ""}

${data.confirmDescription === true ? data.motivation : ""}

${data.confirmDescription === true ? data.purpose : ""}

${data.confirmDescription === true ? data.problemSolve : ""}

${data.confirmDescription === true ? data.learn : ""}


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)


## Installation

Steps required to install your project: 

${data.installation}

## Usage

Find below instructions and examples for project use. 

${data.usage}

${renderLicenseSection(data.license)}

## Contribution

${contributingSection(data.contribution)}

## Tests

Tests were written for this application. Please find below examples on how to run them: 

${data.tests}

## Questions

Thank you so much for taking interest in this project. If you have any questions or feedback please reach out to me: 

My github profile is: 
[GitHub Link](https:///github.com/${data.githubUsername})

My email is: 
[${data.email}](mailto:${data.email})
`;
}

// Exports this function to be able to use in index.js
module.exports = generateMarkdown;
