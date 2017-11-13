class StateInterface{
	botResponse(ctx){
		throw new Error("Implement by derived class, pls!");
	}
}

module.exports = StateInterface