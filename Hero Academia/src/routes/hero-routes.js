const express = require('express');
const router = express.Router();
const {HeroController} = require('../controllers/index')


router.post('/heroes', HeroController.create);
router.get('/heroes/test', HeroController.searchAll)
router.get('/heroes/:id', HeroController.get);
router.get('/heroes', HeroController.getAll);
router.get('/hero/inRange', HeroController.getInRange);
router.patch('/heroes/:id', HeroController.update);
router.delete('/heroes/:id', HeroController.destroy);

module.exports = router;