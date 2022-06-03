const mongoose=require('mongoose')
const ratingSchema=new mongoose.Schema({
	category:{
		type:String
	},
	userId:{
		type:String
	},
	Month:{
		type:String
	},
	RatingParameter:{
		type:String
	},
	FinalRating:{
		type:String
	}
})

const rating=new mongoose.model("rating", ratingSchema)

module.exports=rating