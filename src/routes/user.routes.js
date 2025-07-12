
import { Router } from 'express';
import { registerUser ,refreshAccessToken} from '../controllers/user.controller.js';
import {upload} from '../middlewares/multer.middleware.js';
import { loginUser } from '../controllers/user.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { logoutUser } from '../controllers/user.controller.js';


const router = Router();

router.route('/register').post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name:"coverImage",
            maxCount: 1
        }
    ]),
    registerUser)


// Add other user routes here, e.g., login, logout, etc.
router.route('/login').post(loginUser);

// secured routes
router.route('/logout').post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken)


export default router;