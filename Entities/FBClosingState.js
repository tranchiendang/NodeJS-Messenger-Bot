const StateInterface = require('./BotInterface');
const states = require('../helpers/state');
const hookBot = require('../helpers/hookBotPlatform');

class ClosingState extends StateInterface{
	botResponse(botCtx){
		// Response to bot / messenger platform
		let response;
		response = states.getResponseMessage('close');
		hookBot.callSendAPI(botCtx.sender_id, response);
		
		// set the next state
		botCtx.setState(undefined);
	}
}

module.exports = ClosingState;