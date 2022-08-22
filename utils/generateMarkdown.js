// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
`;
}

module.exports = generateMarkdown;
