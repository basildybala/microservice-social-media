const router =require('express').Router()
const {resgiterUser, loginUser, refreshTokenUser, logoutUser}=require('../controller/identity-controller')

router.post("/register",resgiterUser) 
router.post("/login",loginUser) 
router.post("/refresh-token",refreshTokenUser) 
router.post("/logout",logoutUser) 

module.exports = router;