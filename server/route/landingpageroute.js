// const landingpage=require('../models/landingpage')
const express=require('express')
const router=express.Router()
const landingpagecontroller=require('../controller/landingpagecontroller')


router.post('/', landingpagecontroller.insertlandingpage)
router.get('/', landingpagecontroller.getalllandingpage)
router.get('/:id', landingpagecontroller.getonelandingpage)
router.delete('/:id', landingpagecontroller.deletelandingpage)
router.patch('/:id', landingpagecontroller.updatelandingpage)
// router.post('/', (req, res)=>{
// 	res.send("hii")
// })
module.exports=router