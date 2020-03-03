const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);


function prompts() {
    return inquirer.prompt([
        // * Questions get username to grab profile picture and email
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
}

function generateReadme(results) {
    return ` # ${results.project}\n
       ## Description\n
       ${results.description}\n 
       ## Badges\n
       ![GitHub followers](`+`https://img.shields.io/github/followers/${results.username}?label=Foillow&style=social`+`\n
       ## Usage\n
       ${results.test}\n
       ## Test\n
       ${results.test}\n
       ## Contributing\n
       Feel free to contact us via ![email]() for contribution request.\n
       ## License\n
       # ![${results.licenseList}](${results.link})\n`;
    }

function callAxios(results) {
    
    // const headers = { 
    //        "Authorization" : `Token c27328405277000d34a3213bbcb2aad906df09e9`
    //    }
    //    const email  = await axios.get(`https://api.github.com/users/:${results.username}/event`)
    //    console.log(email)
  axios.get(`https://api.github.com/users/${results.username}`, {
 headers: {
    Authorization : `Token c27328405277000d34a3213bbcb2aad906df09e9`
       }
    
})
}
function appendReadme(response) {
    return ` ## Contributing\n
    Feel free to contact us via ![email](${response.data.email}) for contribution request.\n
    
## License\n
# Copyright © ${results.test}\n 
![${results.license}](${response.link})\n
## Author\n
![profile](${results.avatar_url})`;
}
//         ]).then(function (results) {
//             console.log(results.license);
//             axios.get(`https://api.github.com/users/${results.username}`)
//                 .then(function (response) {
//                     const avatar = JSON.stringify(`${response.data.avatar_url}`);

//                     console.log(response);
//                     // var html = fs.readFileSync(`https://github.com/${results.username}`, 'utf8');

// function getProfile(response) {
//     const avatar = JSON.stringify(`${response.data.avatar_url}`);
// }



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



// async function runit() {
//     try {
//         console.log("Hi")
//         const results = await inquirer.prompt([
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
//                 name: "licenseList",
//                 choices: ["MIT", "zLib License", "Open Software License 3.0", "SIL Open Font License 1.1", "GNU Lesser General Public License v3.0"],
//             },

//             // * License Link
//             {
//                 type: 'input',
//                 message: 'Please provide a link to the license you would like to associate with this project',
//                 name: 'link',
//             },
//             // * Tests
//             {
//                 type: 'input',
//                 message: 'Explain how to run the automated tests for this system.',
//                 name: 'test',
//             },

//         ]);
//         console.log(results);

//         const response  = await axios.get(`https://api.github.com/users/${results.username}`)
//                             const avatar = JSON.stringify(`${response.data.avatar_url}`).slice(1, -1);
//                             console.log(avatar)
//                             console.log(response);
        
//         // const headers = { 
//         //     "Authorization" : `Token c27328405277000d34a3213bbcb2aad906df09e9`
//         // }
//         // const email  = await axios.get(`https://api.github.com/users/:${results.username}/event`)
//         // console.log(email)
// //   axios.get('https://example.com/getSomething', {
// //  headers: {
// //    Authorization: 'Bearer ' + token //the token is a variable which holds the token
// //  }
// // })
//         // console.log(email.data.payload.commits.author.email);
//        let badgeURL = `https://img.shields.io/github/followers/${results.username}?label=Foillow&style=social`

//         let readMeInfo =
//      ` # ${results.project}\n
        
//         ## Description\n
//         ${results.description}\n
        
//         ## Badges\n
//       ![GitHub followers](${badgeURL})\n
        
//         ## Usage\n
//         ${results.test}\n
        
//         ## Test\n
//         ${results.test}\n
        
//         ## Contributing\n
//         Feel free to contact us via ![email]() for contribution request.\n
        
//         ## License\n
//         # ![${results.licenseList}](${results.link})\n
        
//         ## Author\n
//         ![ProfileImage](${avatar})`;

//       await writeFileAsync('README.md', readMeInfo);
//      console.log('Your README.md saved!');
                            
        
//     }
//     catch (err) {
//         console.log(err)
//     }
// };
// runit() 


async function init() {
    console.log("hi")
    try {
        
        let results = await prompts();
        const readMeInfo = await generateReadme(results);
        
        
       let response = await callAxios(results);
    
        // getProfile(response);
  
      await writeFileAsync('README.md', readMeInfo);
      console.log("Successfully wrote to README.md");
    } catch(err) {
        console.log(err);
      }
    try {
        callAxios(results);

    } catch(err) {
      console.log(err);
    }
  }
  
  init();