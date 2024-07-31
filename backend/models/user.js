import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name: String,
    email: String,
    PassWord: String,
})

export const User = mongoose.model("User", schema )