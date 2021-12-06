const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    userName: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    } 
}, {
    timestamps: true
})

// const Users = mongoose.model("Users", userSchema, 'accounts');
// module.exports = Users

module.exports = mongoose.model("Users", userSchema, 'accounts');