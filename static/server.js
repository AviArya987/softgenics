const express=require('express')
const app=express()
router=express.Router()
const port = process.env.PORT || 3000
const bodyParser=require('body-parser')
require('./server/db/connection')
app.use(express.json())

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

// app.use(express.json({ extended: false, limit: '50mb' }))
const jdroute=require('./server/route/JDroute')
const userroute=require('./server/route/adminassigninforoute')
// const candidateroute=require('./server/route/candidateroute')
const jddetailroute=require('./server/route/jddetailroute')
const landingpageroute=require('./server/route/landingpageroute')

app.use('/user', userroute)
app.use('/JD', jdroute)
// app.use('/candidate', candidateroute)
app.use('/JDdetail', jddetailroute)
app.use('/landingPage', landingpageroute)

app.listen(port,()=>{
	console.log(`server is up at ${port}`)
})