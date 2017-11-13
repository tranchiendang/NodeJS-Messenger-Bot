const states = require('./state');
const queueBotIns = require('./globalQueueBotInstances');
const BotImpl = require('../Entities/FBBot');
const VehicleState = require('../Entities/FBVehicleState');
const ClosingState = require('../Entities/FBClosingState');

handleMessage = function handleMessage(sender_id, message, postback){

    let isExisted = queueBotIns.checkExistorNotBotInstance(sender_id);
    botObj = undefined;

    if (!isExisted){
        botObj = new BotImpl(sender_id);
        queueBotIns.setBotInstance(sender_id, botObj)
        botObj.setState(new VehicleState());
        botObj.doResponse();
    } else {
        botObj = queueBotIns.getBotInstanceById(sender_id);
        botObj.setMessage(message || postback);
        botObj.doResponse();
    }

    /*
    queueBotIns.getAllBotIns().forEach(function(value, key) {
      console.log(key + ' = ' + JSON.stringify(value));
    });
    */
};

function completeOps(sender_id){
    let isExisted = queueBotIns.checkExistorNotBotInstance(sender_id);
    if (!isExisted){
        console.log('Nothing todo, thanks!');
    } else {
        botObj = queueBotIns.getBotInstanceById(sender_id);
        botObj.setState(new ClosingState());
        botObj.doResponse();
        queueBotIns.removeBotInstance(sender_id);
        console.log('Done, thanks!');
    }

};

module.exports = {
    handleMessage: handleMessage,
    completeOps: completeOps
};
