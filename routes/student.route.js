const express = require('express');
const router = express.Router();
const student_controller=require('../controllers/student.controller')

router.get('/test', student_controller.test);

router.post('/create', student_controller.create);

router.get('/:id/details', student_controller.details);

router.put('/:id/update', student_controller.update);

router.delete('/:id/delete', student_controller.delete);


module.exports=router;