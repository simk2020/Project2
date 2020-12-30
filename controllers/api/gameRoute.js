const router = require('express').Router();

router.get('/game', async (req,res)=> {
    console.log ("this is working");
    res.json("testing")
    
})

module.exports = router;