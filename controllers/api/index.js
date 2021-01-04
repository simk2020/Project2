const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const gameRoute = require('./gameRoute');
const createUser = require('./createUser');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/', createUser);
router.use('/game', gameRoute);

module.exports = router;


