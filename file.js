const fs = require('fs');

// fs.writeFile('log.txt', 'test content.....', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('file created...')
//     }
// })

// fs.readFile('log.txt', 'utf8', (err, filedata) => {
//     if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('file content - ', filedata);
//             }
// })


// fs.writeFile('log2.txt', 'test 2 content.....', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('file created...')
//         fs.readFile('log2.txt', 'utf8', (err, filedata) => {
//             if(err) {
//                         console.log(err);
//                     }
//                     else {
//                         console.log('file content - ', filedata);
//                     }
//         })
//     }
// })


// fs.rename('log2.txt', 'log3.txt', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('file renamed - ');
//     }
// })

// fs.unlink('log3.txt', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('file deleted - ');
//     }
// })

fs.appendFile('log.txt', '\nAppended content' , (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('file appended.');
    }
})