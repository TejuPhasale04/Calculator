const express=require("express");
const Cal=express.Router();

Cal
.route('/')
.get(Calculator)


async function Calculator(req,res){

    res.render("Cal");

}

module.exports=Cal;