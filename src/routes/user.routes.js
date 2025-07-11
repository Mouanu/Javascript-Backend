
import { Router } from 'express';
import { registerUser } from '../controllers/user.controller.js';
import {upload} from '../middlewares/upload.js';


const router = Router();

router.route('/register').post(
    upload.fiels([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name:"coverimage",
            maxCount: 1
        }
    ]),
    registerUser)

export default router;