const fs = require('fs');

// const readStream = fs.createReadStream('./doc/blog2.txt');
const readStream = fs.createReadStream('./doc/blog2.txt', 'utf8');
const writeStream = fs.createWriteStream('./doc/blog3.txt', 'utf8');

                // Method 1
                
// readStream.on('data', (chunk) => {
//     console.log('----- New Chunk ------');
//     console.log(chunk);

//     writeStream.write('\n ----------------- New Chunk ------------------- \n');

//     writeStream.write(chunk);
// });


// ###  รวม ทั้ง อ่าน และ เขียน File:::::  piping
readStream.pipe(writeStream);