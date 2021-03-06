const mongoose=require('mongoose')

const candidateSchema=new mongoose.Schema({
	/*Uid:{
		type:String,
		required:true
	},
	JDnumber:{
		type:Number,
		required:true
	},
	ClientName:{
		type:String,
		required:true
	},
	JDtitle:{
		type:String,
		required:true
	},
	JDlocation:{
		type:String,
		required:true
	},
	RecId:{
		type:Number,
		required:true
	},*/
	candidateName:{
		type:String,
		required:true
	},
	currentDeignation:{
		type:String
	},
	currentSalary:{
		type:Number
	},
	LastAppraisalOfcandidate:{
		type:String
	},
	expectedSalary:{
		type:String,
		required:true
	},
	dropdown:{
		type:String
	},
	totalexp:{
		type:String,
		required:true
	},
	education:{
		type:String,
		required:true
	},
	currorg:{
		type:String
	},
	currlocation:{
		type:String,
		required:true
	},
	candidatemobno:{
		type:Number
	}/*,
	NoticePeriod:{
		type:Number,
		required:true
	},
	JDsenttocandidate:{
		type:String,
		required:true
	},
	candidateAvailabilityfortheinterview:{
		type:String,
		required:true
	},
	recruitersremarks:{
		type:String
	},
	Date:{
		type:Date,
		default:Date.now
	},
	specialcomments:{
		type:String
	}*/
})

const candidate=new mongoose.model("candidate", candidateSchema)

module.exports=candidate