const express = require('express');
const router = express.Router();
const faculty_controller=require('../controllers/faculty.controller')

router.get('/test',faculty_controller.test);

router.post('/create',faculty_controller.create);

router.get('/:id',faculty_controller.details);

router.post('/:id/update',faculty_controller.update);

router.delete('/:id/delete',faculty_controller.delete);



module.exports=router;