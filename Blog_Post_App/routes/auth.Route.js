import express from "express"

import { authSession } from "../sessions/auth.Session.js";

import UsersController from "../controllers/users-controller.js";

const usersController = new UsersController();

const authRouter = express.Router();


authRouter.post("/login", authSession, async (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const userFound = await usersController.checkIfUserExists(username,password)
        req.session.user = {
            username: username,
            isLoggedIn: true
        }
        res.status(202).send(`You are now logged in ${userFound.username}`);
    } catch (error){
        res.status(404).send(error.message);
    }
})



export default authRouter;