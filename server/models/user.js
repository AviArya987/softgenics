const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
	Acategory:{
		type:String,
		default:"C"
		// required:true
	},
	Aemail:{
		type:String
		// required:true
	},
	Adefpassword:{
		type:String
		// required:true
	},
	AmaxJDinaday:{
		type:Number
		// required:true
	},
	ACVqualityCheck:{
		type:String
		// required:true
	},
	AJDprivilege:{
		type:String,
		default:"No"
		// required:true
	},
	Adesignation:{
		type:String
		// required:true
	},
	Armvmobno:{
		type:String,
		default:"No"
		// required:true
	},
	Awrite:{
		type:String
		// required:true
	},
	Aonecandidatesubm:{
		type:String,
		default:"No"
		// required:true
	},
	Aupdtstatus:{
		type:String
		// required:true
	},
	Aclientcoord:{
		type:String
		// required:true
	},
	Amaxnumunlockinaday:{
		type:Number,
		default:25
		// required:true
	},
	PIfirstname:{
		type:String
		// required:true
	},
	PIlastname:{
		type:String
		// required:true
	},
	PIemail:{
		type:String,
		unique:true
		// required:true
	},
	PIphone:{
		type:Number
		// required:true
	},
	PIgender:{
		type:String
		// required:true
	},
	PIcurrlocation:{
		type:String
		// required:true
	},
	timestamp:{
		type:String
		// default:Date.now
	},
	WIHighestQualification:{
		type:String
	},
	WIGraduation:{
		type:String
	},
	WIdob:{
		type:Date,
		default:Date.now
	},
	WIlanguages:{
		type:String
	},
	WIaadhar:{
		type:String
	},
	WIrecexp:{
		type:Number
	},
	WIpref:{
		type:String,
		default:"Non IT"
	},
	WIcurrempstatus:{
		type:String
	},
	WIInd_Or_Consul:{
		type:String,
		default:"Individual"
	},
	WIOwnportalavailable:{
		type:String,
		default:"No"
	},
	WIOwnportal:{
		type:String,
		default:"None"
	},
	WIPrefInd:{
		type:String,
		default:"No"
	},
	WIHandleJD:{
		type:String,
		default:"regional"
	},
	BDNameofbank:{
		type:String
	},
	BDbranchloc:{
		type:String
	},
	BDnameasba:{
		type:String
	},
	BDphone:{
		type:Number
	},
	BDaccno:{
		type:Number
	},
	BDIFSC:{
		type:String
	},
	BDacctype:{
		type:String
	},
	BDadress:{
		type:String
	},
	client_spoc_mob_no_tobe_shown_to_thisuser:{
		type:String,
		default:"Yes"
	},
	fixedpayout:{
		type:Number
	}

})

const user=new mongoose.model("user", userSchema)

module.exports=user