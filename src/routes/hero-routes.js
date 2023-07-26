const express = require('express');
const router = express.Router();
const {HeroController} = require('../controllers/index')

router.post('/hero', HeroController.create);
router.get('/hero/:id', HeroController.get);
router.get('/heroes', HeroController.getAll);
router.patch('/hero/:id', HeroController.update);
router.delete('/hero/:id', HeroController.destroy);

module.exports = router;