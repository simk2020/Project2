const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const gameRoute = require('./gameRoute');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/games', gameRoute);

module.exports = router;


