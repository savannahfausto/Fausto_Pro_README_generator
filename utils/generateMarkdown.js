// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
        return "";
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return "";
  } else {
    return `- [License](#license)`
  }

}

// TODO: Create a function that returns the license section of README
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

function contributingSection(instructions) {

  if (!instructions) {
    return `I am currently not taking contributions from other developers right now, but please feel free to contact me with questions.`
  } else {
    return `Like what you see? Here are guidelines for how you can contribute to this project:
    ${instructions}`
  }

  // if (contribution) {
  //   return `Like what you see? Here are guidelines for how you can contribute to this project:
  //   ${instructions}`
  // } else if (!contribution) {
  //  instructions = 
  // } else {
  //   instructions = `Please find my contact information in "Questions" section of this README`
  // }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.confirmDescription === true ? data.description : ""}

${data.confirmDescription === false ? data.motivation : ""}

${data.confirmDescription === false ? data.description : ""}

${data.confirmDescription === false ? data.motivation : ""}

${data.confirmDescription === false ? data.motivation : ""}


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
  ${/*github username with link to github profile email with instructions on how to reach me with additional questions*/""}
`;
}

module.exports = generateMarkdown;
