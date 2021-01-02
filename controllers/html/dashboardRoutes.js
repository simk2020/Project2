const router = require('express').Router();
const securityScan = require ('../../utils/auth.js')

router.get("/", (req, res) => {
    res.render("home")
    
})

//getting the login information
router.get('/login', (req, res) =>{

    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    console.log("SAVED Login INFORMATION")
    res.render('login')
});

//after clicking login it redirects to the game.handlebars
router.get("/game", (req, res) => {
    res.render("game")
    
})

// router.get("/game", securityScan, (req, res) => {
//     res.render("game")
    
// })

//after clicking create User it redirects to the login screen and then redirects to the game page 
router.get("/createUser", (req, res) => {
    res.render("createUser")
    
})

router.get("/dashboard", (req, res) => {
    res.render("userDashboard")
    
})

module.exports = router;