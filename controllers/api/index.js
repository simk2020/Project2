const router = require('express').Router();

const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const createUser = require('./createUser');
const activity = require('./activity');
const meditate = require('./meditate')

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/', createUser);
router.use('/activity', activity);
router.use('/meditate', meditate);

module.exports = router;
