// maintain state for every user
const states = {
  "vehicle": "vehicle",
	"phone": "phone",
	"location": "location",
	"waiting_serve": "waiting_serve",
	"close": "close"
};

// maintain response based on state
const messages = {
    [states.vehicle]: {
        attachment: {
            type: "template",
            payload: {
              template_type: "button",
                text: "Which vehicle are you looking for?",
                buttons: [{
                  type: "postback",
                  title: "Taxi 4c",
                  payload: "taxi4c"
                },
                {
                  type: "postback",
                  title: "Taxi 7c",
                  payload: "taxi7c"
                },
                {
                  type: "postback",
                  title: "Bike",
                  payload: "bike"
                }]
            }
          }
    },
    [states.phone]: {
    	text: "Please provide your phone number!"
    },
    [states.location]: {
        text: "Please share your current location!",
        quick_replies: [
            {
                "content_type":"location"
            }
        ]
    },
    [states.waiting_serve]: {
    	text: "Driver is coming, please keep patient, Thank you!"
    },
    [states.close]: {
    	text: "Hope you have a great trip, Thank you and see you again!"
    },
    "wrong_phone": {
    	text: "Invalid phone number, Please provide your phone number!"	
    }
};

function getResponseMessage(state){
	if (state){
		return messages[state];
	} else {
		return {
	    	text: "Keep patient"
	    };
	}
}

module.exports = {
	getResponseMessage: getResponseMessage
};