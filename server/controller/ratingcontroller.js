const Rating=require('../models/rating')

exports.insertrating=(req, res)=>{
	console.log(req.body)
	const rating = new Rating(req.body)
	rating.save().then((dta)=>{
		res.send(dta)
	}).catch((err)=>{
		res.send(err)
	})
}

exports.getallrating=(req, res)=>{
	Rating.find().then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}

exports.getonerating=(req, res)=>{
	const id=req.params.id
	Rating.findById(id).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}

exports.deleterating=(req, res)=>{
	const id=req.params.id
	Rating.findByIdAndDelete(id).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}


exports.updaterating=(req, res)=>{
	const id=req.params.id
	const {category, userId, Month, RatingParameter, FinalRating} = req.body
	Rating.findByIdAndUpdate({_id:id}, {
		$set:{
			"category":category, "userId":userId, "Month":Month, "RatingParameter":RatingParameter,
			"FinalRating":FinalRating
		}
	}).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(data)
	})
}