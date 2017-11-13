const request = require('request');

const FACEBOOK_PAGE_ACCESS_TOKEN = 'EAAB7d3Ni43MBAMEV71dQISJWznNmEAZCDGqbFxVbZC20BxRuatxK0LcnJ0gFO43RwPAKkIXGSeeTD52wZCGgfAwcv14ZBEqt1QUZCggvMU1jpPMFwpz0w316tSIpkXMrSAxMPRgdJEGsXIkXO2w39TqRgaZC1oUS4OflrT44AfbZBqX0E1sSUTN';

function callSendAPI(sender_id, response) {
    // Construct the message body
    let request_body = {
        "recipient": {
            "id": sender_id
        },
        "message": response
    }

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://graph.facebook.com/v2.6/me/messages",
        "qs": { "access_token": FACEBOOK_PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('message sent!')
        } else {
            console.error("Unable to send message:" + err);
        }
    });
};

module.exports = {
	callSendAPI: callSendAPI
}