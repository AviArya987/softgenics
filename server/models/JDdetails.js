const mongoose=require('mongoose')
const JDdetailSchema=new mongoose.Schema({
	clientId:{
		type:String,
		required:true
	},
	Client_spoc_mobile_number_to_be_disclosed_to_user_for_this_JD:{
		type:String,
		default:"No"
	},
	Client_company_name_to_be_disclosed_to_the_candidate:{
		type:String,
		default:"No"
	},
	JDshouldbeshowntousercategory:{
		type:String
	},
	forcetouseourdatabase:{
		type:String
	},
	exclusivity:{
		type:Number,
		default:1
	},
	CVqualcheckreqbyAdmin:{
		type:String,
		required:false
	},
	prioritytag:{
		type:String
	},
	JDuploadDate:{
		type:String,
		required:true
	},
	JDuploadtime:{
		type:String,
		required:true
	},
	JDdes:{
		type:String
		// required:true
	},
	JDtitle:{
		type:String,
		required:true
	},
	SalaryBudget:{
		type:Number
	},
	education:{
		type:String
	},
	totalexperience:{
		type:Number
	},
	JDlocation:{
		type:String,
		required:true
	},
	roundsofinterview:{
		type:String,
		required:true
	},
	noticeperiodprefgivenbyclient:{
		type:Number,
		required:true
	},
	minnumcvsubm:{
		type:Number,
		required:true,
		default:3
	},
	allowonecandidatesubmbyuser:{
		type:String,
		required:"No"
	},
	noofworkingdays:{
		type:Number,
		required:true
	},
	status:{
		type:String,
		required:true
	},
	rework:{
		type:String
	},
	noofvacancies:{
		type:String,
		required:true
	},
	clientcoordtobedoneby:{
		type:String,
		required:true
	},
	AssuredDeliveryReqByClient:{
		type:Date,
		required:true,
		default:Date.now()
	},
	remarks:{
		type:String
	},
	clientEmailListTo:{
		type:String
	},
	clientEmailListCC:{
		type:String
	},
	JDaudio:{
		type:String
	},
	percentpayoutforindifusetalenttrackerdatabase:{
		type:Number
	},
	percentpayoutforconsulifusetalenttrackerdatabase:{
		type:Number
	},
	percentpayoutforindifuseownportal:{
		type:Number
	},
	percentpayoutforconsulifuseownportal:{
		type:Number
	},
	abspayforindifusetalenttrackerdatabase:{
		type:Number
	},
	abspayforconsulifusetalenttrackerdatabase:{
		type:Number
	},
	abspayforindifuseownportal:{
		type:Number
	},
	abspayforconsulifuseownportal:{
		type:Number
	},
	preferredcompanyList:{
		type:String
	},
	companyadress:{
		type:String,
		required:true
	}
})
const JDdetail=new mongoose.model("JDdetail",JDdetailSchema)

module.exports=JDdetail