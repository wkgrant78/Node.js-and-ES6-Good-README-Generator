const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

const api = require('./Develop/utils/api.js');
const generate = require('./Develop/utils/generateMarkdown');

// README question array
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter project title here:"
    },
    {
        type: "input",
        name: "badge",
        message: "Provide the badge links you want included here: "
    },
    {
        type: "input",
        name: "description",
        message: "Enter project desciption here:"
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions here:"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information here:"
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
        message: "Provide contributing guidelines here:"
    },
    {
        type: "input",
        name: "test",
        message: "Provide project test instructions here:"
    },
    {
        type: "input",
        name: "username",
        message: "Enter GitHub username here:"
    },
    {
        type: "input",
        name: "gitURL",
        message: "Provide GitHub URL here:"
    },
]

inquirer.prompt(questions).then(answer => {
    console.log(answer)
    const data = `

    ${answer.badge}

# TITLE: ${answer.title}

## DESCRIPTION: 
${answer.description}

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

## GITHUB USERNAME:
${answer.username}

## GITHUB URL:
${answer.gitURL}

`


    fs.writeFileSync("./Develop/test/README.md", data)

})