# A Breakdown of Professional README Generator Challenge

## Purpose of Week 9 Challenge: Node.js

The purpose of this command-line application is to efficiently create a professional README.d file that explains the purpose of the project, how to use the application and potentially how other developers can contribute/work on the project. 

Once any user has cloned this particular repository to their local device, in a terminal, they can run node index.js to invoke the application. 

Once the application is invoked, the user is taken through a series of prompts/questions specific to their project in the command-line. These responses will then be populated in the README.md file that this application creates. This is accomplished by using the inquirer package to create the prompts the user is asked. Then, this application also requires the fs package, or file system package that is built-in to node.js, in order to take the user's responses and create a README.md file. 

Once the file is created, the users answers are dynamically populated into a README.md file using template literals. These template literals are used to directly insert a user's input into the generateMarkdown function. They are also used to invoke other functions within the template literal string of the generateMarkdown function, based on the user's input/preferences. 

This is particularly seen with the license section of the README.md: 

The user is asked what type of license, if any, they are using for their project. If the user does not choose a license, a badge at the top of the README is not created nor a license section in the README. If the user does choose a license, then a badge is generated and displayed toward the top of the README.md file and a license section is populated into the file as well.

Finally, this application works best when the user answers the prompts in full sentences, so that anyone reading the README.md file in the future has context to what was originally being answered. 

For example, if the user is asked: What is the purpose of this project? 

It would be better for the user to start their response with, "The Purpose of this project is...," instead of something like, "To create a README.md file." The first response gives context and makes for a better README.md file, the second response does not.

## Link to Professional README Generator Walkthrough Video
[Professional README Generator Walkthrough Video](https://drive.google.com/file/d/1EkXSLxuMhHp3slM9LL5m4OCpytrMqT1W/view)
