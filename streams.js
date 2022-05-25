const fs = require('fs');

const readStream = fs.createReadStream('./doc/custom_button.dart', {encoding: 'utf-8'});    // Create:  createReadStream()
const writeStream = fs.createWriteStream('./doc/get_code.dart')             // Create  createWriteStream()

        // Method 1

// readStream.on('data', (chunkData) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunkData);

//     // add code to new file
//     writeStream.write(chunkData);       // Write code
    
// });

        // Method 2:  Use  Pipe for jon method : read and write
readStream.pipe(writeStream);

