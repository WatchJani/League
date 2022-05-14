const { Router } = require("express")
const authController = require("../controllers/authController")

const router = Router()

router.post("/login", authController.Post_Login)
router.post("/register", authController.Post_Register)


module.exports = router