import express from 'express'
import {loginController, registerController, testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router();

//Routing
//register post method
router.post('/register', registerController);
//login post method
router.post('/login', loginController);
//test routes
router.get("/test",requireSignIn,isAdmin, testController);



export default router