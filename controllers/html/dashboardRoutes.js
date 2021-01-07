const axios = require('axios').default;
const securityScan = require('../../utils/auth');

const router = require('express').Router();
// const { User, Project } = require('../../models');

router.get("/", (req, res) => {
    res.render("home")

})

//getting the login information-
router.get('/login', (req, res) => {
    console.log("You clicked the login button in the nav bar")
    res.render('login')
});

//after getting to dashboard and click actiity it direct to the playGame.handlebars
router.get("/playGame", async (req, res) => {
    const queryUrl = "https://opentdb.com/api.php?amount=5&category=12&difficulty=medium";

    try {
        const fetched = await axios.get(queryUrl);
        console.log ("The questions and Answers from the queryUrl", fetched.data)
        fetched.innerText = queryUrl.data
        res.render("playGame", {
            data:fetched.data.results
        })
    } catch (error) {
        console.error(error)
    }
})

//after getting to dashboard and click actiity it direct to the activity.handlebars
//play game #2 difficulty easy 
router.get("/activity", async (req, res) => {

    const queryUrl = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy";

    try {
        const fetched = await axios.get(queryUrl);
        console.log ("The questions and Answers from the queryUrl", fetched.data)
        fetched.innerText = queryUrl.data
        // console.log(JSON.stringify(fetched.data))
        res.render("activity", {
            data:fetched.data.results
        })
    } catch (error) {
        console.error(error)
    }

})

///after getting to dashboard and click actiity it direct to the mediate.handlebars
////play game #2 difficulty easy 
router.get("/meditate", async (req, res) => {
    const queryUrl = "https://opentdb.com/api.php?amount=5&category=14&difficulty=hard";

    try {
        const fetched = await axios.get(queryUrl);
        console.log ("The questions and Answers from the queryUrl", fetched.data)
        fetched.innerText = queryUrl.data
        // console.log(JSON.stringify(fetched.data))
        res.render("meditate", {
            data:fetched.data.results
        })
    } catch (error) {
        console.error(error)
    }

})

//after clicking create User it redirects to the login screen and then redirects to the game page 
router.get("/createUser", (req, res) => {

    console.log("Click the Register Button in nav bar and total users saved in DataBase ", req.session.user_id)
    res.render('createUser')

})

router.get("/dashboard",  (req, res) => {
    console.log("clicking dashboard button in nav bar")
    res.render("userDashboard")

})

router.get("/logout", (req, res) => {
    console.log("clicking logout button in nav bar")
    res.render("home")

})

module.exports = router;
