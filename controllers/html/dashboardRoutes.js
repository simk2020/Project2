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

//getting the login information
router.get('/login', (req, res) =>{

    if (req.session.user_id) {
        res.redirect('/game');
        return;
    }

    console.log("New User Saved:", req.session.user_id)
    res.render('login')
});

//after getting to dashboard and click actiity it direct to the playGame.handlebars
router.get("/playGame",daVjncjScan, (req, res) => {
    res.render("playGame")
    
})

//after getting to dashboard and click actiity it direct to the activity.handlebars
router.get("/activity",daVjncjScan, (req, res) => {
    res.render("activity")
    
})

///after getting to dashboard and click actiity it direct to the mediate.handlebars
router.get("/meditate",daVjncjScan, (req, res) => {
    res.render("meditate")
    
})

//after clicking create User it redirects to the login screen and then redirects to the game page 
router.get("/createUser", (req, res) => {
    res.render("createUser")
    
})

router.get("/dashboard",daVjncjScan, (req, res) => {
    res.render("userDashboard")
    
})

router.get("/logout", (req, res) => {
    res.render("home")
    
})

module.exports = router;