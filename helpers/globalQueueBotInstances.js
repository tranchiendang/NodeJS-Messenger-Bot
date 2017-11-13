const queueBotInstances = new Map();

function getBotInstanceById(sender_id){
	return queueBotInstances.get(sender_id);
}

function removeBotInstance(sender_id){
	return queueBotInstances.delete(sender_id);
}

function setBotInstance(sender_id, objVal){
	return queueBotInstances.set(sender_id, objVal);
}

function checkExistorNotBotInstance(sender_id){
	return queueBotInstances.has(sender_id);
}

function getAllBotIns(){
	return queueBotInstances;
}

module.exports = {
	getBotInstanceById: getBotInstanceById,
	removeBotInstance: removeBotInstance,
	setBotInstance: setBotInstance,
	checkExistorNotBotInstance: checkExistorNotBotInstance,
	getAllBotIns: getAllBotIns
}