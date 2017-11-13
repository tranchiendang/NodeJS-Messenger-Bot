const processMessage = require('../helpers/processMessage');

function completedOps(req, res){
	console.log(req.body);
	if (req.body.sender_id){
		processMessage.completeOps(req.body.sender_id);
		res.status(200).end("Done");
	} else {
		res.status(200).end("Invalid, try again!");
	}
}

module.exports = completedOps;