var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paz' });
});

router.get('/somos', function(req, res, next) {
  res.render('somos', { title: 'Somos' });
});

router.get('/objetivos', function(req, res, next) {
  res.render('objetivos', { title: 'Objetivos' });
});

router.get('/confiamos', function(req, res, next) {
  res.render('confiamos', { title: 'Confiamos' });
});

router.get('/experiencia', function(req, res, next) {
  res.render('experiencia', { title: 'Experiencia' });
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});
module.exports = router;


