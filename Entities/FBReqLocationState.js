const StateInterface = require('./StateInterface');
const states = require('../helpers/state');
const hookBot = require('../helpers/hookBotPlatform');
const RevLocationState = require('./FBRecvLocationState');

class ReqLocationState extends StateInterface{
	botResponse(botCtx){
		// logic to process bot / messager platform message
		let response;
		if (botCtx.message.text){
			let phoneNum = botCtx.message.text;
			// check valid phone number by using regex
			let patterns = new RegExp("[0-9]{10}[0-9]?","i");
			let tmpPhoneCheck = patterns.test(phoneNum);
			
			if (tmpPhoneCheck){
				botCtx.setPhone(phoneNum);
				
				// set the next state
				response = states.getResponseMessage('location');
				botCtx.setState(new RevLocationState());
			} else {
				response = states.getResponseMessage('wrong_phone');
			}	
		}

		// Response to bot / messenger platform
		hookBot.callSendAPI(botCtx.sender_id, response);
	}
}

module.exports = ReqLocationState;