
import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"

const router = Router()



router.route("/register").post(
    upload.fields([
   
       {
          name: "avatar",
          maxCount: 1,
       },

       {
         name: "coverimage",
         maxCount: 1
       },
    ]),
    registerUser

    
)

router.route("/register").post(
   upload.fields([
    {
       name: "avatar",
       maxCount:1,
    },

    {
      name: "coverImage",
      maxCount:1,
    }


   ]) ,

   registerUser)
//router.route("/login").post(login)

// http://localhost:8000/users/register
// //
// http://localhost:8000/users/login

export default router