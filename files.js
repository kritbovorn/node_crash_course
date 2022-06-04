const fs = require('fs');

// Read File

// fs.readFile('./doc/blog.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(`### Have error ${err}`);
//         return 
//     }
//     console.log(data);
// });

// console.log('Make before sir');

// Write Files

// fs.writeFile('./doc/blog1.txt', 'My name is Kritbovorn', () => {
//     console.log('File was written');
// });


// Make Directories

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(`Have error: ${err}`);
            return
        }
        console.log('Folder was created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
            return
        }
        console.log('Folder was deleted');
    })
}


// Delete Files

if (fs.existsSync('./doc/deleteme.txt')) {
    fs.unlink('./doc/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
            return
        }
        console.log('File was deleted');
    });
} else {
    fs.writeFile('./doc/deleteme.txt', 'Create new File', () => {
        console.log('File was created');
    });
}