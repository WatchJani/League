const User = require("../models/userModel")
const jwt = require("jsonwebtoken")


const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: maxAge
    })
}

module.exports.Post_Login = async (req, res) => {
    const email = req.body.Email
    const password = req.body.Password

    try {
        const user = await User.login(email, password)
        res.status(201).json({ user: user._id })
    }
    catch (err) {
        console.log(err.message)
        res.status(404).send(err.message)
    }
}


module.exports.Post_Register = async (req, res) => {
    const username = req.body.Username
    const password = req.body.Password
    const email = req.body.Email
    const phone = req.body.Phone

    try {
        const user = await User.create({ username, password, email, phone })
        const token = createToken(user._id)
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ user: user._id })
    }
    catch (err) {
        console.log(err.message)
        res.status(404).send(err.message)
    }
}

