

const JDdetail=require('../models/JDdetails')

exports.insertone=(req, res)=>{
	const jddetail=new JDdetail(req.body)
	jddetail.save().then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}


exports.getall=(req, res)=>{
	JDdetail.find().then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}



exports.getone=(req, res)=>{
	const id=req.params.id
	JDdetail.findById(id).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}


exports.deleteone=(req, res)=>{
	const id=req.params.id
	JDdetail.findByIdAndDelete(id).then((data)=>{
		const myobj={
			data:data,
			msg:"deleted"
		}
		res.send(myobj)
	}).catch((err)=>{
		res.send(err)
	})
}


exports.updateone=(req, res)=>{
	const id=req.params.id
	const Client_spoc_mobile_number_to_be_disclosed_to_user_for_this_JD = req.body.Client_spoc_mobile_number_to_be_disclosed_to_user_for_this_JD
	const Client_company_name_to_be_disclosed_to_the_candidate = req.body.Client_company_name_to_be_disclosed_to_the_candidate
	const JDshouldbeshowntousercategory = req.body.JDshouldbeshowntousercategory
	const forcetouseourdatabase = req.body.forcetouseourdatabase
	const exclusivity = req.body.exclusivity
	const CVqualcheckreqbyAdmin = req.body.CVqualcheckreqbyAdmin
	const prioritytag = req.body.prioritytag
	const JDuploadDate = req.body.JDuploadDate
	const JDuploadtime = req.body.JDuploadtime
	const JDdes = req.body.JDdes
	const JDtitle = req.body.JDtitle
	const SalaryBudget = req.body.SalaryBudget
	const education = req.body.education
	const totalexperience = req.body.totalexperience
	const JDlocation = req.body.JDlocation
	const roundsofinterview = req.body.roundsofinterview
	const noticeperiodprefgivenbyclient = req.body.noticeperiodprefgivenbyclient
	const minnumcvsubm = req.body.minnumcvsubm
	const allowonecandidatesubmbyuser = req.body.allowonecandidatesubmbyuser
	const noofworkingdays = req.body.noofworkingdays
	const status = req.body.status
	const rework = req.body.rework
	const noofvacancies = req.body.noofvacancies
	const clientcoordtobedoneby = req.body.clientcoordtobedoneby
	// const AssuredDeliveryReqByClient = req.body.AssuredDeliveryReqByClient
	const remarks = req.body.remarks
	const clientEmailListTo = req.body.clientEmailListTo
	const clientEmailListCC = req.body.clientEmailListCC
	const JDaudio = req.body.JDaudio
	const percentpayoutforindifusetalenttrackerdatabase = req.body.percentpayoutforindifusetalenttrackerdatabase
	const percentpayoutforconsulifusetalenttrackerdatabase = req.body.percentpayoutforconsulifusetalenttrackerdatabase
	const percentpayoutforindifuseownportal = req.body.percentpayoutforindifuseownportal
	const percentpayoutforconsulifuseownportal = req.body.percentpayoutforconsulifuseownportal
	const abspayforindifusetalenttrackerdatabase = req.body.abspayforindifusetalenttrackerdatabase
	const abspayforconsulifusetalenttrackerdatabase = req.body.abspayforconsulifusetalenttrackerdatabase
	const abspayforindifuseownportal = req.body.abspayforindifuseownportal
	const abspayforconsulifuseownportal = req.body.abspayforconsulifuseownportal
	const preferredcompanyList = req.body.preferredcompanyList
	const companyadress = req.body.companyadress

	JDdetail.findByIdAndUpdate({_id:id}, {
		$set:{
			"Client_spoc_mobile_number_to_be_disclosed_to_user_for_this_JD":Client_spoc_mobile_number_to_be_disclosed_to_user_for_this_JD,
		"Client_company_name_to_be_disclosed_to_the_candidate":Client_company_name_to_be_disclosed_to_the_candidate,
		"JDshouldbeshowntousercategory":JDshouldbeshowntousercategory, "forcetouseourdatabase":forcetouseourdatabase,
		"exclusivity":exclusivity, "CVqualcheckreqbyAdmin":CVqualcheckreqbyAdmin, "prioritytag":prioritytag, 
		"JDuploadDate":JDuploadDate, "JDuploadtime":JDuploadtime, "JDdes":JDdes, "JDtitle":JDtitle,
		 "SalaryBudget":SalaryBudget, "education":education, "totalexperience":totalexperience, "JDlocation":
		 JDlocation, "roundsofinterview":roundsofinterview, "noticeperiodprefgivenbyclient":noticeperiodprefgivenbyclient, 
		 "minnumcvsubm":minnumcvsubm, "allowonecandidatesubmbyuser":allowonecandidatesubmbyuser, "noofworkingdays":
		 noofworkingdays, "status":status, "rework":rework, "clientcoordtobedoneby":clientcoordtobedoneby, 
		 /*"AssuredDeliveryReqByClient":AssuredDeliveryReqByClient,*/ "remarks":remarks, "clientEmailListTo":
		 clientEmailListTo, "clientEmailListCC":clientEmailListCC, "JDaudio":JDaudio, "percentpayoutforindifusetalenttrackerdatabase":percentpayoutforindifusetalenttrackerdatabase,
		"percentpayoutforconsulifusetalenttrackerdatabase":percentpayoutforconsulifusetalenttrackerdatabase, 
		"percentpayoutforindifuseownportal":percentpayoutforindifuseownportal, "percentpayoutforconsulifuseownportal":percentpayoutforconsulifuseownportal,
		"abspayforindifusetalenttrackerdatabase":abspayforindifusetalenttrackerdatabase, 
		"abspayforconsulifusetalenttrackerdatabase":abspayforconsulifusetalenttrackerdatabase, "abspayforindifuseownportal":abspayforindifuseownportal,
		"abspayforconsulifuseownportal":abspayforconsulifuseownportal, "preferredcompanyList":preferredcompanyList,
		"companyadress":companyadress
		}
	}).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}


