const axios = require('axios').default;
const daVjncjScan = require('../../utils/auth');

const router = require('express').Router();
// const { User, Project } = require('../../models');

router.get("/", (req, res) => {
    res.render("home")

})

// router.get('/', async (req, res) =>{
//     try {
//         const ProjectData = await Project.findAll ({
//             include: [{
//                 model: User,
//                 attributes: [ "email", "password"],
//             },
//         ],
//         });
//         const newProjects = ProjectData.map((projects) => 
//             projects.get({plain: true})
//         );
//         console.log(newProjects);
//         res.render("home", {
//             newProjects,
//             logged_in: req.session.logged_in,
//         });
//     } catch (error) {
//         res.status(400).json(error)
//     }
// });

//getting the login information-
router.get('/login', (req, res) => {
    console.log("You clicked the login button in the nav bar")
    res.render('login')
});

//after getting to dashboard and click actiity it direct to the playGame.handlebars
router.get("/playGame", async (req, res) => {
    const queryUrl = "https://opentdb.com/api.php?amount=3&category=18&difficulty=medium";
    try {
        const postMessage = await axios.get(queryUrl);
        console.log(JSON.stringify(postMessage.data))
        res.render("playGame", {
            data: JSON.stringify(postMessage.data)
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
        console.log(JSON.stringify(fetched.data))
        res.render("activity", {
            data: JSON.stringify(fetched.data)
        })
    } catch (error) {
        console.error(error)
    }

})

///after getting to dashboard and click actiity it direct to the mediate.handlebars
////play game #2 difficulty easy 
router.get("/meditate", async (req, res) => {
    const queryUrl = "https://opentdb.com/api.php?amount=10&category=14&difficulty=hard";

    try {
        const fetched = await axios.get(queryUrl);
        console.log(JSON.stringify(fetched.data))
        res.render("meditate", {
            data: JSON.stringify(fetched.data)
        })
    } catch (error) {
        console.error(error)
    }


})

//after clicking create User it redirects to the login screen and then redirects to the game page 
router.get("/createUser", (req, res) => {

    // if (req.session.user_id) {
    //     res.redirect('/createUser');
    //     return;
    // }

    console.log("Create User Saved:", req.session.user_id)
    res.render('createUser')

})

router.get("/dashboard", (req, res) => {
    res.render("userDashboard")

})

router.get("/logout", (req, res) => {
    res.render("home")

})

module.exports = router;

//make request with axios & pass data through handlebars
//when I pass data to ui