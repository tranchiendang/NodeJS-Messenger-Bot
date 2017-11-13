const processMessage = require('../helpers/processMessage');

/* Handling all messenges */
solveMessage = function solveMessage(req, res){

	if (req.body.object === 'page') {
        req.body.entry.forEach(entry => {

        	let webhook_event = entry.messaging[0];
        	let sender_id = webhook_event.sender.id;

           	processMessage.handleMessage(sender_id, webhook_event.message, webhook_event.postback);
        });

        res.status(200).end();
    }
}

module.exports = solveMessage;