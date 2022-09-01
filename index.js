// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions that user will be asked when types in node index to the terminal
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'confirm',
      name: 'confirmDescription',
      message: 'Would you like prompts to guide you through writing a short description of your project?',
    },
    //If user does not want prompts, they will be asked a general question to describe their project
    {
      type: 'input',
      name: 'description',
      message: 'Please describe the what, why and how of your project.',
      when: answers => answers.confirmDescription === false
    },
    //If a user does want prompts, they will be asked specific questions to render a more specific description of their project
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation in creating this project?',
      when: answers => answers.confirmDescription === true
    },
    {
      type: 'input',
      name: 'purpose',
      message: 'Why did you build this project?',
      when: answers => answers.confirmDescription === true
    },
    {
      type: 'input',
      name: 'problemSolve',
      message: 'What problem does your project solve?',
      when: answers => answers.confirmDescription === true
    },
    {
      type: 'input',
      name: 'learn',
      message: 'What did you learn while creating this project?',
      when: answers => answers.confirmDescription === true
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions and examples for use of your application.',
    },
    //If user selects none, based on the generateMarkdown.js file, no license badge or section will be rendered in the README
    {
      type: 'list',
      name: 'license',
      message: 'Which license will you use for your project?',
      choices: ['MIT', 'GNU', 'Apache', 'ISC', 'none'],
    },
    {
      type: 'confirm',
      name: 'confirmContribution',
      message: 'Would you like to allow others to contribute to your project?',
    },
    //When a user wants to accept contributions from other developers this question will be asked of the user
    {
      type: 'input',
      name: 'contribution',
      message: 'Please include guidelines for how someone can contribute to your project.',
      when: answers => answers.confirmContribution === true,
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Writes tests for your application. Then provide exsamples on how to run them here.',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email would you like to use to receive questions about your project?',
    },
    
];


// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        } 
        console.log('README successfully written!');
    })
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile('testREADME.md', generateMarkdown(answers));
        })
}

// Invoke init to initialize app
init();
