# A Breakdown of Professional README Generator Challenge

## Purpose of Week 9 Challenge: Node.js

The purpose of this command-line application is to efficiently create a professional README that explains the purpose of the project, how to use the application and potentially how other developers can contribute/work on the project. 

Once any user has cloned this particular repository to their local device, in a terminal, they can run node index.js to invoke the application. 

Once the application is invoked, the user is taken through a series of prompts in the command-line that will be populated in the README.md file that is created. 

This is accomplished by using the inquirer package to create the prompts the user is asked. Then, this application also requires the fs package, or file system package that is built-in to node.js, in order to take the user's responses and create a README.md file. 

Once the file is created, the users answers are dynamically populated into a README.md file using template literals. These template literals are used to directly insert a user's input into the README.md. They are also used to invoke functions within the template literal, based on the user's input/preferences. This is particularly seen with the license section of the README.md: 

The user is asked what type of license, if any, they are using for their project. If the user does not choose a license, a badge at the top of the README is not create nor a license section in the README. 

## Link to Professional README Generator Walkthrough Video
