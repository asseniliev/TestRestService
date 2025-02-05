var express = require('express');
var router = express.Router();

let artists = [];

/* GET home page. */
router.get('/date', (req, res) => {
  const date = new Date();
  res.json({ now: date });
  console.log(req.body.Password);
});

router.post('/artists', (req, res) => {
  artists.push(req.body.newArtist);
  res.json({ artistsList: artists });
  console.log(req.body);
});

router.post('/plus', (req, res) => {
  //console.log(req.body.a1);
  let a1 = req.body.a1;
  let a2 = req.body.a2;

  let result = a1 + a2;

  res.json({
    "a1": 'First operand is ' + a1 + ' .',
    "a2": 'Second operand is ' + a2 + ' .',
    result: 'Result: ' + a1 + ' + ' + a2 + ' = ' + result + ' .'
  });

});

router.post('/minus', (req, res) => {
  //console.log(req.body.a1);
  let a1 = req.body.a1;
  let a2 = req.body.a2;

  let result = a1 - a2;

  res.json({
    "a1": 'First operand is ' + a1 + ' .',
    "a2": 'Second operand is ' + a2 + ' .',
    result: 'Result: ' + a1 + ' - ' + a2 + ' = ' + result + ' .'
  });

});

module.exports = router;
