const mongoose=require('mongoose');
const conn=mongoose.connect("mongodb://localhost:27017/",{
	dbName:'talenttrackerhr',
	useNewUrlParser:true,
	useUnifiedTopology:true
	// useFindAndModify:false
}).then(()=>{
	console.log("connection successful")
}).catch((err)=>{
	console.log(err)
})