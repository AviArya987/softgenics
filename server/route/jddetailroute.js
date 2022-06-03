const express=require('express')
const router=express.Router()
const jddetailcontroller=require('../controller/jddetailcontroller')

router.post('/', jddetailcontroller.insertone)
router.get('/', jddetailcontroller.getall)
router.get('/:id', jddetailcontroller.getone)
router.delete('/:id', jddetailcontroller.deleteone)
router.patch('/:id', jddetailcontroller.updateone)


module.exports=router