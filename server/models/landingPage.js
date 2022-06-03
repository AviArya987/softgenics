const mongoose=require('mongoose')
const LandingSchema=new mongoose.Schema({
	quickGuide:{
		type:String
	},
	privacypolicy:{
		type:String
	},
	usertermsandguidelines:{
		type:String
	},
	freelancingProcess:{
		type:String
	},
	Rulesandguidelines:{
		type:String
	},
	frequentlyAsked:{
		type:String
	},
	TipsTorecruiters:{
		type:String
	},
	FreelanceContractAgreementDraft:{
		type:String
	},
	ClientcontractAgreementDraft:{
		type:String
	}
})


const Landingpage=new mongoose.model('Landingpage', LandingSchema)
module.exports=Landingpage