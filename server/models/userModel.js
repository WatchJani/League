const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter an username"],
        minlength: [6, "Minimum username lenght is 6 characters"]
    },
    password: {
        type: String,
        require: [true, "Please enter an password"],
        minlength: [6, "Minimum username lenght is 6 characters"],
    },
    activation_hash: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        lowercase: true,
        validate: [validator.isEmail, 'Unesite validan email!'],
    },
    phone: {
        type: String
    },
    role: {
        type: String
    },
    logo: {
        type: String
    }
})

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt) //password
    next()
})

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user) {
        const auth = await bcrypt.compare(password, user.password) //password
        if (auth) {
            return user
        }
        throw Error("incrorecct password")
    }
    throw Error("incrorecct email")
}

const User = mongoose.model("User", userSchema)
module.exports = User