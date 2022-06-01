const express = require('express')
const User=require('../models/user')
// app.use(express.json())
const router=express.Router()
const profilecontroller=require('../controller/profilecontroller')



router.post("/", profilecontroller.profile)
router.get("/", profilecontroller.getallprofile)
router.get("/:id", profilecontroller.getsingleprofile)
router.delete("/:id", profilecontroller.deletesingle)
router.patch("/:id", profilecontroller.updateuser)



module.exports=router