const fs = require("fs");


 const writeToFile = (file, data) => {
    fs.writeFileSync(file, data)
}

 const appendToFile = (file, data) => {
    fs.appendFileSync(file, `\n${data}`)
}

 const readFile = file => {
    let fileContent = fs.readFileSync(file, {encoding: "utf-8"});
    console.log(fileContent);
}

module.exports = {
    writeToFile,
    appendToFile,
    readFile,
}
