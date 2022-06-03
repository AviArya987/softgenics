const candidate=require('../models/candidate')

exports.insertCandidate=(req, res)=>{
	const candidate=new candidate(req.body)
	candidate.save().then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})

}



exports.getallCandidate=(req, res)=>{
	candidate.find().then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}


exports.getoneCandidate=(req, res)=>{
	const id=req.params.id

	candidate.findById(id),then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}



exports.deleteCandidate=(req, res)=>{
	const id=req.params.id
	candidate.findByIdAndDelete(id).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}


exports.updateCandidate=(req, res)=>{
	const id=req.params.id
	const candidatename=req.body.candidtename
	const currdesig=req.body.currdesig
	const currsalary=req.body.currsalary
	const lastappofcandidate=req.body.lastappofcandidate
	const expcsal=req.body.expcsal
	const dropdown=req.body.dropdown
	const totalexp=req.body.totalexp
	const education=req.body.education
	const currorg=req.body.currorg
	const currlocation=req.body.currlocation
	const candidatemobno=req.body.candidatemobno
	candidate.getByIdAndUpdate({_id:id}, {
		$set:{
			candidateName:candidatename, currentDesignation:currdesig, currenrSalary:currsalary, LastAppraisalOfcandidate:
			lastappofcandidate, expectedSalary:expcsal, dropdown:dropdown, totalexp:totalexp, education:education, currorg:
			currorg, currlocation:currlocation, candidatemobno:candidatemobno

		}
	})
}