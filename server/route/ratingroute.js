const express=require('express')
const router=express.Router()
const ratingcontroller=require('../controller/ratingcontroller')
router.post('/', ratingcontroller.insertrating)
router.get('/', ratingcontroller.getallrating)
router.get('/:id', ratingcontroller.getonerating)
router.delete('/:id', ratingcontroller.deleterating)
router.patch('/:id', ratingcontroller.updaterating)

module.exports=router