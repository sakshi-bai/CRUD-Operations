const Faculty=require('../models/faculty.model');

exports.test=(req,res)=>{
    res.send('greetings from faculty test controller ');   
}

exports.create=(req,res)=>{
    let faculty = new Faculty({
        name:req.body.name,
        salary:req.body.salary
       })
  
       faculty.save((err)=>{
           if (err){
               return next(err);
           }
           res.send('faculty created successfully!')
       }
       ) 
  }

  exports.details=(req,res)=>{
    faculty.findById(req.param.id, (err,faculty)=>{
        if(err) 
            return next(err)
        res.send(faculty);
    })
   
}
exports.update=(req,res)=>{
    Faculty.findByIdAndUpdate(req.params.id,{$set: req.body},(err,faculty)=>{
        if (err) return next(err);
        res.send('Faculty updated.');
    });
}
exports.delete=(req,res)=>{
    Faculty.findByIdAndRemove(req.param.id, (err, faculty)=>{
        if(err) 
            return next(err)
        res.send(faculty);
    })

}
