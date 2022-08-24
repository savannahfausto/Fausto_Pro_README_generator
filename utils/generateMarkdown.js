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
- [Credits](#credits)
${renderLicenseLink(data.license)}



## Installation

Steps required to install your project: 

${data.installation}

## Usage

Find below instructions and examples for project use. 

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

Tests were written for this application. Please find below examples on how to run them: 

${data.tests}

## Questions

Thank you so much for taking interest in this project. If you have any questions or feedback please reach out me: 

My github profile is: 
[GitHub Link](https:///github.com/${data.githubUsername})
My email is: 
[${data.email}](mailto:${data.email})
  ${/*github username with link to github profile email with instructions on how to reach me with additional questions*/""}
=======
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  
  ## Description

    ${data.description}

    ${data.motivation}

    ${data.purpose}

    ${data.problemSolve}

    ${data.learn}


  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)



  ## Installation

  Steps required to install your project: 

    ${data.installation}

  ## Usage

  Find below instructions and examples for project use. 

    ${data.usage}
  
  ## License 

  This project uses ${data.license}. For more information on licenses please 
  click [here](https://choosealicense.com/).

  ## Contributing

  
      //contributing
      //tests
      //questions
          //github username with link to github profile
          //email with instructions on how to reach me with additional questions
>>>>>>> 27df302950eb02bdb4e9d613715f68865eafa289
`;
}

module.exports = generateMarkdown;
