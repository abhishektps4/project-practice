
import mongoose ,{Schema} from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,

        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
          
        },
        email:{
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        avatar:{
            type:String, // cloudinary url
            required: true,

        },
        coverImage:{
            type: String,
        },
        watchHistory: [
            {
            type: mongoose.Schema.Types.ObjectId,
             ref: "Video"
            }
        ],
        password : {
            type: String,
            required:[ true , 'Password is required' ],


        },

        refreshToken:{
            type: String,

        }
          
  
    },{timestamps: true}
)

userSchema.pre("save" , async function (next){
      if(!this.isModified("password")) return next()

       this.password = await bcrypt.hash(this.password, 10)
       next()


})

 userSchema.methods.isPasswordCorrect = async function (password) {
    return  await bcrypt.compare(password, this.password)
 }

 userSchema.methods.generateAccessToken = function(){
    return Jwt.sign(
        {
            _id: this.id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
 }


 userSchema.methods.generateRefreshToken = function() {
    return Jwt.sign(
        {
            _id: this.id,
        },
        process.env.REFRESH_TOKEN_SECRET,  // This should be the secret specifically for refresh tokens
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY  // You can set a longer expiration for refresh tokens, like 7 days
        }
    )
}



 
export const User = mongoose.model("User" , userSchema)
