const express=require('express')
const app=express()
router=express.Router()
const port = process.env.PORT || 3000
require('./server/db/connection')
app.use(express.json())


const jdroute=require('./server/route/JDroute')
const userroute=require('./server/route/adminassigninforoute')

app.use('/user', userroute)
app.use('/JD', jdroute)

app.listen(port,()=>{
	console.log(`server is up at ${port}`)
})