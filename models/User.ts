import { Schema, model } from "mongoose"

const User = new Schema({
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    default: null,
  },
})

export default model("User", User)
