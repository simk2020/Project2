const router = require('express').Router();






router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end(err.message);
    }
  });

module.exports = router;