import fileService from "../auxiliary-functions/file-service.js";



class UserModel {
    async checkIfUserExists(username,password) {
        const jsonUsers = await fileService.readFile("./users.json");
        const users = JSON.parse(jsonUsers);
        const userFound = users.find((user) => user.username === username && user.password === password)
        if(!userFound){
            throw new Error(`Invalid username`)
        }else {
            return userFound;
        }
    }
}


export default UserModel;