const { contact } = require('../controllers/PagesController');

module.exports = router => {
  router.get('/', (req, res) => {
      res.send('welcome home');
    });

router.get('/contact', contact);
};
