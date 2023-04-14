import fsPromises from "fs/promises";


const readFile = async (path) => {
    const content = await fsPromises.readFile(path, {encoding: "utf-8"});
    return content;
}

const writeTofile = async (path, data) => {
    await fsPromises.writeFile(path,data);
}

const appendTofile = async (path,data) => {
    await fsPromises.appendFile(path,data);
}

export default {
    readFile,
    writeTofile,
    appendTofile
}