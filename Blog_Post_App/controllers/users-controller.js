import UserModel from "../models/users.model.js";
const userModel = new UserModel();

class UsersController {
    async checkIfUserExists(username,password) {
        const userFound = await userModel.checkIfUserExists(username,password);
        return userFound;
    }
}


export default UsersController;