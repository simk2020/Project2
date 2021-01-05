const router = require('express').Router();
const securityScan = require ('../../utils/auth.js')

router.get("/", (req, res) => {
    res.render("home")
    
})

//getting the login information
router.get('/login', (req, res) =>{

    if (req.session.loggedIn) {
        res.redirect('/game');
        return;
    }

    console.log("register button clicked",)
    res.render('login')
});

//after getting to dashboard and click actiity it direct to the playGame.handlebars
router.get("/playGame", (req, res) => {
    res.render("playGame")
    
})

//after getting to dashboard and click actiity it direct to the activity.handlebars
router.get("/activity", (req, res) => {
    res.render("activity")
    
})

///after getting to dashboard and click actiity it direct to the mediate.handlebars
router.get("/meditate", (req, res) => {
    res.render("meditate")
    
})

//after clicking create User it redirects to the login screen and then redirects to the game page 
router.get("/createUser", (req, res) => {
    res.render("createUser")
    
})

router.get("/dashboard", (req, res) => {
    res.render("userDashboard")
    
})

router.get("/logout", (req, res) => {
    res.render("home")
    
})

module.exports = router;