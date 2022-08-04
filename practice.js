const fs = require('fs');
const path = require('path');

fs.appendFile(path.join(__dirname, "text.txt"), "Hello There", (err) => {
    if (err) {
        console.log("there's something wrong here")
    } else {
        console.log("success!")
    }
});


fs.readFile(__dirname + "/text.txt", "utf8", (err, data) => {
    if(err) {
        console.log("something went wrong")
    } else {
        console.log(data)
    }
});

fs.writeFile(__dirname + "/text.txt", " Check me out", "utf8", (err) => {
    if (err) {
        console.log("there's something wrong here")
    } else {
        console.log("file was written!")
    }
});

fs.rename(__dirname + "/text.txt",__dirname + "/updated-text.txt", (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("file successfully renamed");
    }
});

fs.unlink(__dirname + "/updated-text.txt", (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("successfully deleted");
    }
});