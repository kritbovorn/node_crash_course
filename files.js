const fs = require('fs');

// Reading Files

fs.readFile('./doc/blog11.txt', (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data.toString());
});
console.log('Last line here!!!');




//Writing Files

fs.writeFile('./doc/blog1.txt', 'console.log("data")', () => {
    console.log('File blog.txt was written...');
});

fs.writeFile('./doc/blog5.txt', "TextButton(\nonTap: (){}),", () => {
    console.log('Create new file is: blog2.txt');
});




// Create and Delete Directories

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log('Have Error ${err}');
        }
        console.log('Folder was created.....');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log('Have error to Remove Directory:: ${err}');
        }
        console.log('Folder was Deleting');
    });
}





// Deleting Files

if (fs.existsSync('./doc/blog5.txt')) {
    fs.unlink('./doc/blog5.txt', (err) => {
        if (err) {
            console.log('Have Deletingssssss ${err}');
        }
        console.log("File Deletedddddd");
    });
}