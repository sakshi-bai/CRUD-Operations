const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let FacultySchema =new Schema({
    name: {type:String, required:true, max:100},
    salary: {type:Number, required:true}
})

module.exports = mongoose.model('Faculty',FacultySchema);