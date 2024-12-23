import {asyncHandler} from "../utils/asyncHandler.js";
import User from "../models/user.models.js"
const registerUser = asyncHandler(async (req,res) =>{
    
   return res.status(200).json({
       // message: "ok"
      // get user details from frontend
      //validation - not empty
      //check if user ia already exist: username,email
      //check for images, check for avatar
      //upload them to cloudinary
      //create user object -create entry in db
      // remove password and refresh token field from response
      //check for usercreation 
      //return response
      //otherwise error response

      const { fullname, email, username, password } = req.body

      console.log("email:", email)
      
 





    })
})

export {registerUser}