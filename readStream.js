const fs = require('fs');

fs.createReadStream('demo.txt', 'utf-8').on('data', (chunk) => {
    console.log(chunk);
})