const BotInterface = require('./BotInterface');

class FBBot extends BotInterface{
	constructor(sender_id){
		super();
		this.sender_id = sender_id;
		this.phone = null;
		this.stateObj = null;
		this.message = null;
		this.lat = null;
		this.long = null;
		this.vehicle = null;
	}

	setMessage(fbMessage){
		this.message = fbMessage;
	}

	getMessage(){
		return this.message;
	}

	setState(stateObj){
		this.stateObj = stateObj;
	}

	getState(){
		return this.stateObj;
	}

	setPhone(phone){
		this.phone = phone;
	}

	getPhone(){
		return this.phone;
	}

	setLatLong(lat, long){
		this.lat = lat;
		this.long = long;
	}

	getLatLong(){
		return [this.lat, this.long];
	}

	setVehicle(veh){
		this.vehicle = veh;
	}

	getVehicle(){
		return this.vehicle;
	}

	doResponse(){
		this.stateObj.botResponse(this);
	}
}

module.exports = FBBot;