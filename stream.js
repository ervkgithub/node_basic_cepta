const fs = require('fs');

const readStream = fs.createReadStream('./logs/log1.txt', 'utf-8');
const writeStream = fs.createWriteStream('./logs/log_bkp.txt')


readStream.on('data', (chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
})

// readStream.pipe(writeStream);