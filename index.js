const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const verificationController = require('./controllers/verification');
const messageWebhookController = require('./controllers/messageWebhook');
const apiCompletedOpsController = require('./controllers/apiCompletedOps');

app.get('/', verificationController);
app.post('/', messageWebhookController);
app.post('/completed', apiCompletedOpsController);

const server = app.listen(3000, () => {
	console.log("Express server listening on port 3000");
});