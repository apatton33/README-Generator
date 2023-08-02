// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Welcome to my README generator.")
console.log("Answer the following questions to generate a high quality README for your project.")

// TODO: Create an array of questions for user input
const questions = [
    // Name of project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            }  else {
                console.log('Enter a title to continue.');
                return false;
            }
        }
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project?',
        validate: your_description => {
            if (your_description) {
                return true;
            }  else {
                console.log('Enter a project description.');
                return false;
            }
        }
        
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: your_installation => {
            if (your_installation) {
                return true;
            }  else {
                console.log('Enter steps of installation to continue.');
                return false;
            }
        }
        
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: your_usage => {
            if (your_usage) {
                return true;
            }  else {
                console.log('Enter the information on how to use the project.');
                return false;
            }
        }
        
    },
    // license 
    {
        type: 'checkbox',
        name: 'license',
        message: 'choose a license that will best suit your project.',
        choices: ['mpl 2.0', 'GNU', 'Apache', 'MIT', 'None of the above'],
        validate: your_license => {
            if (your_license) {
                return true;
            }  else {
                console.log('Select a license fore the project.');
                return false;
            }
        }
        
    },
    // Contributors
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to this project?',
        validate: your_contribution => {
            if (your_contribution) {
                return true;
            }  else {
                console.log('Porvide the information on how to contribute to the project.');
                return false;
            }
        }
        
    },
    // Test instructions npm 
    {
        type: 'input',
        name: 'test',
        message: 'How does the user test this project?',
        validate: your_test => {
            if (your_test) {
                return true;
            }  else {
                console.log('Explain how to test this project.');
                return false;
            }
        }
        
    },
    // Github username
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: github_input => {
            if (github_input) {
                return true;
            }  else {
                console.log('Please enter your Github username.');
                return false;
            }
        }
        
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email for those who may have any questions?',
        validate: email_input => {
            if (email_input) {
                return true;
            }  else {
                console.log('Please enter your email.');
                return false;
            }
        }
        
    },
    
]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    console.log("You did it! You can now preview your README file.");

    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};


// Function call to initialize app
init();
