const express = require('express');
const router = express.Router();
const {HeroController} = require('../controllers/index')

// router.get('/', (req, res) => {
//     res.json({data: "hello world"})
// });

// router.get('/testdata', (req, res, next) => {
//     console.log("TEST DATA :");
//     pool.query('Select * from test')
//         .then(testData => {
//             console.log(testData);
//             res.send(testData.rows);
//     })
// });


// heroes API

router.post('/hero', HeroController.create);
router.get('/hero/:id', HeroController.get);
router.get('/heroes', HeroController.getAll);
router.patch('/hero/:id', HeroController.update);
router.delete('/hero/:id', HeroController.destroy);

module.exports = router;