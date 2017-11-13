class BotInterface{
	setState(stateObj){
		throw new Error("Implement by derived class, pls!");
	}

	doResponse(){
		throw new Error("Implement by derived class, pls!");
	}
}

module.exports = BotInterface;