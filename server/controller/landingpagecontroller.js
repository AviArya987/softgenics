const Landingpage=require('../models/landingPage')

exports.insertlandingpage=(req,res)=>{
	const landingPage=new Landingpage(req.body)
	landingPage.save().then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}



exports.getalllandingpage=(req, res)=>{
	Landingpage.find().then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(data)
	})
}

exports.getonelandingpage=(req, res)=>{
	const id=req.params.id
	Landingpage.findById(id).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}


exports.updatelandingpage=(req, res)=>{
	const id=req.params.id
	const {quickGuide, privacypolicy, usertermsandguidelines, freelancingProcess, Rulesandguidelines,
		frequentlyAsked, TipsTorecruiters, FreelanceContractAgreementDraft, 
		ClientcontractAgreementDraft}=req.body
	Landingpage.findByIdAndUpdate({_id:id},{
		$set:{
			"quickGuide":quickGuide, "privacypolicy":privacypolicy, "usertermsandguidelines":
			usertermsandguidelines, "freelancingProcess":freelancingProcess, "Rulesandguidelines":
			Rulesandguidelines, "frequentlyAsked":frequentlyAsked, "TipsTorecruiters":TipsTorecruiters,
			"FreelanceContractAgreementDraft":FreelanceContractAgreementDraft,
			"ClientcontractAgreementDraft":ClientcontractAgreementDraft
		}
	})
}

exports.deletelandingpage=(req, res)=>{
	const id=req.params.id
	Landingpage.findByIdAndDelete(id).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}