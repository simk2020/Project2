const router = require('express').Router();
const { Project } = require('../../models');

router.get('/game', async (req,res)=> {
    console.log ("this is working");
    res.json("testing")
    
})

// router.post('/gameRoute', async (req, res) => {
//     try {
//       console.log("post gameroute hitting ")
//       const newGame = await Project.create({
//         ...req.body,
//         email: req.session.email,
//       });
  
//       res.json(newGame)
//     } catch (err) {
//       res.status(400).json(err.message);
//     }
//   });

module.exports = router;