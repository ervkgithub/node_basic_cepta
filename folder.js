const fs = require('fs');

// fs.mkdir('bin', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('folder created.')
//     }
// })

// fs.rmdir('logs', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('folder deleted.')
//     }
// })

// fs.mkdir('logs', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('folder created.');
        
//         fs.writeFile('./logs/log.txt', 'test content.....', (err) => {
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('file created...')
//             }
//         })
//     }
// })

// fs.unlink('./bin/log2.txt', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('file deleted - ');
//         fs.rmdir('bin', (err) => {
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('folder deleted.')
//             }
//         })

//     }
// })


// fs.readdir('logs', (err, files) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('folders read - ', files)
//         for(temp of files) {
//             fs.unlink('./logs/'+temp, (err) => {
//                 if(err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log('file deleted', temp);
//                 }
//             })
//         }
//         fs.rmdir('logs', (err) => {
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('folder deleted');
//             }
//         } )
//     }
// })