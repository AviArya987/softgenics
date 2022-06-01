const User=require('../models/user')
exports.profile=(req,res)=>{
	const fname=req.body.fname
	const lname=req.body.lname
	const email=req.body.email
	const phone=req.body.phone
	const gender=req.body.gender
	const location=req.body.location
	if(fname=="" || lname=="" || email=="" || phone=="" || gender=="" || location==""){
		res.send("All fields are required")
	}

	let date_ob = new Date()
  	let date = ("0" + date_ob.getDate()).slice(-2)
  // current month
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
	let year = date_ob.getFullYear()
	let fulldate=(year + "-" + month + "-" + date)
	// console.log(fulldate)
	const user=new User({PIfirstname:fname, PIlastname:lname, PIemail:email, PIphone:phone, PIgender:gender, PIcurrlocation:location, timestamp:fulldate})
	user.save().then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}

exports.getsingleprofile=(req, res)=>{
	const _id=req.params.id
	const user=User.findById(_id).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}

exports.getallprofile=(req, res)=>{
	User.find().then((data)=>{
		res.send(data)
	}).catch((err)=>{
		console.log(err)
	})
}

exports.deletesingle=(req, res)=>{
	const _id=req.params.id
	const user=User.findByIdAndDelete(_id).then((user)=>{
		res.send(user)
	}).catch((err)=>{
		res.send(err)
	})
}


exports.updateuser=(req,res)=>{
	const id=req.params.id
	if(req.body.role=="admin"){
		console.log(req.body)
		const category=req.body.category
		const email=req.body.email
		const defpassword=req.body.defpassword
		const maxJDinaday=req.body.maxJDinaday
		const CVqualityCheck=req.body.CVqualityCheck
		const JDprivilege=req.body.JDprivilege
		const designation=req.body.designation
		const rmvmobno=req.body.rmvmobno
		const write=req.body.write
		const onecandidatesubm=req.body.onecandidatesubm
		const Aupdtstatus=req.body.updtstatus
		const Aclientcoord=req.body.clientcoord
		const Amaxnumunlockinaday=req.body.maxnumunlockinaday

		if(category=="" || email=="" || defpassword=="" || maxJDinaday=="" || CVqualityCheck=="" || JDprivilege=="" || 
			designation=="" || rmvmobno=="" || write=="" || onecandidatesubm=="" || Aupdtstatus=="" || Aclientcoord=="" || 
			Amaxnumunlockinaday==""){
			res.send("all fields are required")
		}

		User.findByIdAndUpdate({_id:id},
		{$set:{
			Aemail:email,Adefpassword:defpassword,Acategory:category,AmaxJDinaday:maxJDinaday,
			ACVqualityCheck:CVqualityCheck,AJDprivilege:JDprivilege, Adesignation:designation,Armvmobno:rmvmobno,
			Awrite:write,Aonecandidatesubm:onecandidatesubm,Aupdtstatus:Aupdtstatus, Aclientcoord:Aclientcoord,
			Amaxnumunlockinaday:Amaxnumunlockinaday
		}})
		.then((data)=>{
			res.send(data)
		}).catch((err)=>{
			res.send(err)
		})
	}
	else if(req.body.role=="user"){
		// updating personal information tab data
		// 

		if(req.body.tab=="PI"){
			const fname=req.body.fname
			const lname=req.body.lname
			const email=req.body.email
			const phone=req.body.phone
			const gender=req.body.gender
			const location=req.body.location
			if(fname=="" || lname=="" || email=="" || phone=="" || gender=="" || location==""){
				res.send("All fields are required")
			}
			User.findOneAndUpdate({_id:id}, {PIfirstname:fname, PIlastname:lname, PIemail:email, PIphone:phone, PIgender:gender, PIcurrlocation:location})
			.then((data)=>{
				res.send(data)
			}).catch((err)=>{
				res.send(err)
			})
		}


		else if(req.body.tab=="WI"){
			console.log(req.body)
			const hqual=req.body.hqual
			const grad=req.body.grad
			const dob=req.body.dob
			const langs=req.body.langs
			const aadhar=req.body.aadhar
			const recexp=req.body.recexp
			const pref=req.body.pref
			const currempstatus=req.body.currempstatus
			const indorconsul=req.body.indorconsul
			const ownportalavailable=req.body.ownportalavailable
			const ownportal=req.body.ownportal
			const pref_ind=req.body.pref_ind
			const handleJD=req.body.handleJD
			if(hqual=="" || grad=="" || dob=="" || langs=="" || aadhar=="" || recexp=="" || pref=="" || pref_ind=="" || currempstatus=="" || indorconsul=="" || ownportalavailable=="" || handleJD=="" || ownportal==""){
				res.send("all the fields are required")
			}
			User.findOneAndUpdate({_id:id}, {WIHighestQualification:hqual, WIGraduation:grad, WIdob:dob, 
			WIlanguages:langs, WIaadhar:aadhar, WIrecexp:recexp, WIpref:pref, WIcurrempstatus:currempstatus, 
			WIInd_Or_Consul:indorconsul, WIOwnportalavailable: ownportalavailable, WIOwnportal: ownportal, 
			WIPrefInd:pref_ind, WIHandleJD:handleJD})
			.then((data)=>{
				res.send(data)
			}).catch((err)=>{
				res.send(err)
			})
		}
		if(req.body.tab=="BD"){
			const BDNameofbank=req.body.Nameofbank
			const BDbranchloc=req.body.branchloc
			const BDnameasba=req.body.nameasba
			const BDphone=req.body.phone
			const BDaccno=req.body.accno
			const BDIFSC=req.body.IFSC
			const BDacctype=req.body.acctype
			const BDadress=req.body.adress

			if(BDNameofbank=="" || BDbranchloc=="" || BDnameasba=="" || BDphone=="" || BDaccno=="" || BDIFSC=="" || BDacctype=="" || BDadress==""){
				res.send("all the fields are required")
			}


			User.findByIdAndUpdate({_id:id},{$set:{BDNameofbank:BDNameofbank, BDbranchloc:BDbranchloc,
				BDnameasba:BDnameasba, BDphone:BDphone, BDaccno:BDaccno, BDIFSC:BDIFSC, BDacctype:BDacctype, 
				BDadress:BDadress
			}}).then((data)=>{
				res.send(data)
			}).catch((err)=>{
				res.send(err)
			})
		}
		// updating work information tab data
	}
		// const rsp=User.findOneAndUpdate({id:_id}, {PIfirstname:fname, PIlastname:lname, PIemail:email, PIphone:phone, PIgender:gender, PIcurrlocation:location})
}
