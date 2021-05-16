const bodyParser = require('body-parser');
const express=require('express');
const student=require('./routes/student.route');
const faculty=require('./routes/faculty.route')
const mongoose=require('mongoose');

const app=express();

//database connection is here
mongoose.connect("mongodb://localhost/studentDb",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log("Connected to the database");
})
.catch(err =>{
  console.log("Cannot connect to the database",err);
  process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//http://localhost/3000/students
app.use('/students',student)

app.use('/faculty',faculty)


app.listen(3000,()=>{
    console.log('server is running');
})

