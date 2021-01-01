const router = require('express').Router();
const securityScan = require ('../../utils/auth.js')

router.get("/", (req, res) => {
    res.render("home")
    
})

router.get("/login", (req, res) => {
    res.render("login")
    
})

router.get("/game", securityScan, (req, res) => {
    res.render("game")
    
})

router.get("/createUser", (req, res) => {
    res.render("createUser")
    
})

module.exports = router;