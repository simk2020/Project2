const router = require('express').Router();
const { Project } = require('../../models');

router.post('/gameRoute', async (req, res) => {
  try {
    console.log("post gameRoute hitting ")
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
