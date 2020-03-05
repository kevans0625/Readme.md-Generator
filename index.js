const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);


async function runit() {
    try {
        console.log("Hi")
        const results = await inquirer.prompt([
            // * Questions get user name to grab profile picture and email
            //might need to ask for password to retrieve next steps
            {
                type: 'input',
                message: 'What is your Github username?',
                name: 'username',
            },
            // * Project title
            {
                type: 'input',
                message: 'What is the name of your application?',
                name: 'project',
            },
            // * Description
            {
                type: 'input',
                message: 'Please describe your project.',
                name: 'description',
            },
            // * Table of Contents
            {
                type: 'input',
                message: 'Please list out your table of contents and include a commat after each bullet point.',
                name: 'content',

            },
            // * Installation
            {
                type: 'input',
                message: 'Please provide a step by step instructions on how to get the program running.',
                name: 'installation',
            },
            // * Usage
            {
                type: 'input',
                message: 'Please describe how to implement usage.',
                name: 'usage',
            },
            // * License
            {
                type: 'list',
                message: 'Please select the appropriate license to associate with this project',
                name: "licenseList",
                choices: ["MIT", "zLib License", "Open Software License 3.0", "SIL Open Font License 1.1", "GNU Lesser General Public License v3.0"],
            },

            // * License Link
            {
                type: 'input',
                message: 'Please provide a link to the license you would like to associate with this project',
                name: 'link',
            },
            // * Tests
            {
                type: 'input',
                message: 'Explain how to run the automated tests for this system.',
                name: 'test',
            },

        ]);
        console.log(results);

        let test = results.content;
        let splitTest  = test.split(",");
        console.log(splitTest);

        // const config = {
        //     headers: { 'Authorization': 'Token c27328405277000d34a3213bbcb2aad906df09e9' }
        // }

        // const response  = await axios.get(`https://api.github.com/users/${results.username}`, config)


        // TOC 
        // function myFunction() {
        //     var str1 = `Hello `;
            
        //     let foods = ["apple", "pizza", "test"];
        //     let test = []
        //    foods.forEach(function(food){
        //         test.push(str1 + food)
              
        //       console.log(food + "/n")
        //   });
        //   //document.getElementById("demo").innerHTML = res;
        //   console.log(test)
          
        //   }
        const response = await axios.get(`https://api.github.com/users/${results.username}`)

        const avatar = JSON.stringify(`${response.data.avatar_url}`).slice(1, -1);
        // console.log(avatar)
        console.log(response.data);

        let badgeURL = `https://img.shields.io/github/followers/${results.username}?label=Foillow&style=social`

        const readMeInfo = ` # ${results.project}\n
[GitHub followers](${badgeURL})\n
## Description
${results.description}
## Table of Contents
${results.content}

## Installation
${results.content}
## Usage
${results.test}
## Contributing
Feel free to contact us via [email](${response.data.email}) for contribution request.
## Test
${results.test}
## License
# [${results.licenseList}](${results.link})
## Author\n
[ProfileImage](${avatar})`;

 // const pdfInfo = ` # ${response.html_url}`;

        await writeFileAsync('README.md', readMeInfo);
        console.log('Your README.md saved!');
        //await writeFileAsync('profile.pdf', pdfInfo);
        console.log('Your profile.pdf saved!');
    }
    catch (err) {
        console.log(err)
    }
};
runit()

