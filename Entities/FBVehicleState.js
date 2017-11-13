const StateInterface = require('./StateInterface');
const PhoneState = require('./FBPhoneState');
const hookBot = require('../helpers/hookBotPlatform');
const states = require('../helpers/state');

class VehicleState extends StateInterface{
	botResponse(botCtx){
		let response;
		// logic here
		response = states.getResponseMessage('vehicle');
		hookBot.callSendAPI(botCtx.sender_id, response);
		// set the next state 
		botCtx.setState(new PhoneState());
	}
}

module.exports = VehicleState;