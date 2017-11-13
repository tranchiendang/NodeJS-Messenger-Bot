const StateInterface = require('./StateInterface');
const LocationState = require('./FBReqLocationState');
const hookBot = require('../helpers/hookBotPlatform');
const states = require('../helpers/state');

class PhoneState extends StateInterface{
	botResponse(botCtx){
		let response;

		// logic to process bot / messager platform message
		if (botCtx.message.payload){
			botCtx.setVehicle(botCtx.message.payload);
			// set the next state 
			response = states.getResponseMessage('phone');
			botCtx.setState(new LocationState());
		} else {
			response = states.getResponseMessage('vehicle');
		}

		// Response to bot / messenger platform
		hookBot.callSendAPI(botCtx.sender_id, response);
	}
}

module.exports = PhoneState;