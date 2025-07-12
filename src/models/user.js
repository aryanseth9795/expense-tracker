
import mongoose from "mongoose"
const userSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      Username: {
        type: String,
        required: true,
        unique: true,
      },
    
})