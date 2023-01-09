const mongoose=require('mongoose')
const infoschema=new mongoose.Schema({



title:{
    type:String,
    require:true,
},
year:{
    type:Date,
    require:true,
},
rating:{
    type:Number,
    require:true,
},



})

const INFO =mongoose.model("movdb",infoschema)
module.exports=INFO
