const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

const toc = require("markdown-toc");
const generate = require('./Develop/utils/generateMarkdown');
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// README question array
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter project title:"
    },
    {
        type: "input",
        name: "badge",
        message: "Provide the badge links you want included: "
    },
    {
        type: "input",
        name: "description",
        message: "Enter project desciption:"
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project, from the following list:",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide contributing guidelines:"
    },
    {
        type: "input",
        name: "test",
        message: "Provide project test instructions:"
    },
    {
        type: "input",
        name: "username",
        message: "Enter GitHub username:"
    },
    {
        type: "input",
        name: "gitURL",
        message: "Enter your GitHub URL:"
    },
    {
        type: "input",
        name: "email",
        message: "Provide personal email:"
    },
]

toc('## DESCRIPTION\## USAGE\## LICENSE').content

inquirer.prompt(questions).then(answer => {
    console.log(answer)
    const data = `

${answer.badge}

# TITLE: ${answer.title}

## DESCRIPTION: 
${answer.description}

## TABLE OF CONTENTS:
    *INSTALLATION
    *USAGE
    *LICENSE
    *CONTRIBUTION
    *TEST
    *QUESTIONS

## INSTALLATION: 
${answer.installation}

## USAGE:
${answer.usage}

## LICENSE:
${answer.license}

## CONTRIBUTING:
${answer.contributing}

## TEST:
${answer.test}

## QUESTIONS:
    GitHub username: ${answer.username}
    GitHub URL: ${answer.gitURL}
    Personal email: ${answer.email}

`

    fs.writeFileSync("./Develop/test/README.md", data)

})