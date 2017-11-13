const StateInterface = require('./BotInterface');
const states = require('../helpers/state');
const hookBot = require('../helpers/hookBotPlatform');
const ClosingState = require('./FBClosingState');

class WaitingServeState extends StateInterface{
	botResponse(botCtx){
		// Response to bot / messenger platform
		let response;
		let tmpObj;

		// whether or not bot instance has completed flag
		if (!botCtx.completed){
			response = states.getResponseMessage('waiting_serve');
			tmpObj = this;
		} else {
			response = states.getResponseMessage('close');
			tmpObj = new ClosingState();
		}

		hookBot.callSendAPI(botCtx.sender_id, response);
		
		// set the next state
		botCtx.setState(tmpObj);
	}
}

module.exports = WaitingServeState;