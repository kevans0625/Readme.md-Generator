const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);




// async function prompts() {

//     inquirer
//         .prompt([
//             // * Questions get user name to grab profile picture and email
//             //might need to ask for password to retrieve next steps
//             {
//                 type: 'input',
//                 message: 'What is your Github username?',
//                 name: 'username',
//             },
//             // * Project title
//             {
//                 type: 'input',
//                 message: 'What is the name of your application?',
//                 name: 'project',
//             },
//             //     * At least one badge
//             {
//                 type: 'checkboxes',
//                 message: 'Please select at least one badge type.',
//                 name: 'badge',
//                 choices: ['Javascript', 'node.js', 'PHP'],
//             },
//             // * Description
//             {
//                 type: 'input',
//                 message: 'Please describe your project.',
//                 name: 'description',
//             },
//             // * Table of Contents
//             {
//                 type: 'input',
//                 message: 'Please list out your table of contents and include a commat after each bullet point.',
//                 name: 'content',
//                 choices: ['Javascript', 'node.js', 'PHP'],
//             },
//             // * Installation
//             {
//                 type: 'input',
//                 message: 'Please provide a step by step instructions on how to get the program running.',
//                 name: 'installation',
//             },
//             // * Usage
//             {
//                 type: 'input',
//                 message: 'Please describe how to implement usage.',
//                 name: 'usage',
//             },
//             // * License
//             {
//                 type: 'list',
//                 message: 'Please select the appropriate license to associate with this project',
//                 name: "license",
//                 choices: ["MIT", "zLib License", "Open Software License 3.0", "SIL Open Font License 1.1", "GNU Lesser General Public License v3.0"],
//             },

//             // * License Link
//             {
//                 type: 'input',
//                 message: 'Please provide a link to the license you would like to associate with this project',
//                 name: 'license',
//             },
//             // * Contributing
//             {
//                 type: 'input',
//                 message: 'Are you open to contributions?',
//                 name: 'contributor',
//             },
//             // * Tests
//             {
//                 type: 'input',
//                 message: 'Explain how to run the automated tests for this system.',
//                 name: 'test',
//             },

//         ]).then(function (results) {
//             console.log(results.license);
//             axios.get(`https://api.github.com/users/${results.username}`)
//                 .then(function (response) {
//                     const avatar = JSON.stringify(`${response.data.avatar_url}`);

//                     console.log(response);
//                     // var html = fs.readFileSync(`https://github.com/${results.username}`, 'utf8');
//                     let readMeInfo =
//                         ` # ${results.project}\n

// ## Description\n
// ${results.description}\n

// ## Badges\n
// ${results.description}\n

// ## Usage\n
// ${results.test}\n

// ## Test\n
// ${results.test}\n

// ## Contributing\n
// Feel free to contact us via ![email](${response.data.email}) for contribution request.\n

// ## License\n
// # ![${results.license}](${results.link})\n

// ## Author\n
// ![profile](${avatar})`;

//                     writeFileAsync('README.md', readMeInfo, (err) => {
//                         // throws an error, you could also catch it here
//                         if (err) {

//                             throw err;
//                         }
//                         // success case, the file was saved
//                         console.log('Your README.md saved!');


//writeFileAsync('README.pdf', readMeInfo, (err) => {
    //                         // throws an error, you could also catch it here
    //                         if (err) {
    
    //                             throw err;
    //                         }
    //                         // success case, the file was saved
    //                         console.log('Your README.md saved!');
    
//                     });



//                 })
//                 .catch(function (error) {
//                     console.log(error);
//                 });

//         });

// }
// prompts();



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
                choices: ['Javascript', 'node.js', 'PHP'],
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

        // const config = {
        //     headers: { 'Authorization': 'Token c27328405277000d34a3213bbcb2aad906df09e9' }
        // }
    
        // const response  = await axios.get(`https://api.github.com/users/${results.username}`, config)
            
    
        const response  = await axios.get(`https://api.github.com/users/${results.username}`)
            
                            const avatar = JSON.stringify(`${response.data.avatar_url}`).slice(1, -1);
                            // console.log(avatar)
                            console.log(response.data);
        
       let badgeURL = `https://img.shields.io/github/followers/${results.username}?label=Foillow&style=social`
const readMeInfo = ` # ${results.project}\n`+ ` ## Description\n${results.description}\n ## Badges\n ![GitHub followers](`+`https://img.shields.io/github/followers/${results.username}?label=Foillow&style=social`+`\n
## Usage\n
${results.test}\n
## Test\n
${results.test}\n
## Contributing\n
Feel free to contact us via ![email]() for contribution request.\n
## License\n
# [${results.licenseList}](${results.link})\n`;
    //     let readMeInfo =
    //  ` # ${results.project}
    //  \n
    //     ## Description\n
    //     ${results.description}\n
        
    //     ## Badges\n
    //   ![GitHub followers](${badgeURL})\n
        
    //     ## Usage\n
    //     ${results.test}\n
        
    //     ## Test\n
    //     ${results.test}\n
        
    //     ## Contributing\n
    //     Feel free to contact us via ![email](${response.data.email}) for contribution request.\n
        
    //     ## License\n
    //     # ![${results.licenseList}](${results.link})\n
        
    //     ## Author\n
    //     ![ProfileImage](${avatar})`;

      await writeFileAsync('README.md', readMeInfo);
     console.log('Your README.md saved!');
                            
    }
    catch (err) {
        console.log(err)
    }
};
runit() 


