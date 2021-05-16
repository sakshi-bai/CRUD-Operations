const Student=require('../models/student.model');

exports.test=(req,res)=>{
    res.send('greetings from test controller');
}
exports.create=(req,res)=>{
  let student = new Student({
      name:req.body.name,
      regid:req.body.regid
     })

     student.save((err)=>{
         if (err){
             return next(err);
         }
         res.send('student created successfully!')
     }
     ) 
}

exports.details=(req,res)=>{
    Student.findById(req.param.id, (err,student)=>{
        if(err) 
            return next(err)
        res.send(student);
    })
   
}

exports.update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,{$set: req.body},(err,student)=>{
        if (err) return next(err);
        res.send('Student updated.');
    });
}

exports.delete=(req,res)=>{
    Student.findByIdAndRemove(req.param.id, (err)=>{
        if(err) 
            return next(err)
        res.send('deleted sucessfully!');
    })
}
