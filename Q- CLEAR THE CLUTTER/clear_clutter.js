const express = require('express');
const fs = require("fs");
const path = require("path");

const dir = "C:\\Users\\LENOVO\\OneDrive\\문서\\DESKTOP-2\\WEB DEV\\BACKEND (IMP) -\\Q- CLEAR THE CLUTTER"

const files = fs.readdirSync("C:\\Users\\LENOVO\\OneDrive\\문서\\DESKTOP-2\\WEB DEV\\BACKEND (IMP) -\\Q- CLEAR THE CLUTTER")
console.log("Total files - ", files);


let folder = [];
for (let i = 0; i < files.length; i++) {

    if (fs.statSync(path.join(dir, files[i])).isDirectory()) {
        continue;
    }

    let n = files[i].length;

    for (let j = 0; j < n; j++) {
        if (files[i][j] == '.') {
            folder[i] = files[i].slice(j + 1);
        }
    }
}
console.log("folder - ", folder);


for (let i = 0; i < files.length; i++) {
    if (folder[i] == undefined) {
        continue;
    }

    if (folder[i] == "json" ||
        folder[i] == "js"
    ) {
        continue;
    }

    if (!fs.existsSync(folder[i])) {

        fs.mkdirSync(folder[i])
        fs.renameSync(path.join(dir, files[i]), path.join(dir, folder[i], files[i]))
    }
    else {
        fs.renameSync(path.join(dir, files[i]), path.join(dir, folder[i], files[i]))
    }
}



