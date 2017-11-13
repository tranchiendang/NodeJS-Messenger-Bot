const StateInterface = require('./BotInterface');
const states = require('../helpers/state');
const hookBot = require('../helpers/hookBotPlatform');
const WaitingServeState = require('./FBWaitingServeState');

class RecvLocationState extends StateInterface{
	botResponse(botCtx){
		// logic to process bot / messager platform message
        if (botCtx.message.attachments){
            // Get the payload for the postback
            let coordinates = botCtx.message.attachments[0].payload.coordinates;

            botCtx.setLatLong(coordinates.lat, coordinates.long);
        }

		// Response to bot / messenger platform
		let response;
		response = states.getResponseMessage('waiting_serve');
		hookBot.callSendAPI(botCtx.sender_id, response);
		
		// set the next state
		botCtx.setState(new WaitingServeState());
	}
}

module.exports = RecvLocationState;