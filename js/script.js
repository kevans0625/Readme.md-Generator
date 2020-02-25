var fs = require("fs");
var inquirer = require("inquirer");

inquirer
.prompt([
//     * At least one badge
{
    type:'checkboxes',
    message:'Please select at least one badge type.',
    name:'username',
    choices: ['Javascript','node.js','PHP'],
},
// * Project title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email
])

