var express = require('express');
var bodyParser = require('body-parser'); // parser for post requests

var Conversation = require('watson-developer-cloud/conversation/v1'); // watson sdk

var router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(express.static('./public')); // load UI from public folder


// Create the service wrapper
var conversation = new Conversation({
    'username': 'b72a01f7-59ad-44ef-9765-9d16f1db1e34',
    'password': 'J5PrVVzTUHCM',
    'version_date': '2017-05-26'
});

// /* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('index');
// });

// Endpoint to be call from the client side
router.post('/message', function (req, res) {


    var workspace = process.env.WORKSPACE_ID || '<workspace-id>';

    if (!workspace || workspace === '<workspace-id>') {
        return res.json({
            'output': {
                'text': 'The app has not been configured with a <b>WORKSPACE_ID</b> environment variable. Please refer to the ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple">README</a> documentation on how to set this variable. <br>' + 'Once a workspace has been defined the intents may be imported from ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple/blob/master/training/car_workspace.json">here</a> in order to get a working application.'
            }
        });
    }
    var payload = {
        workspace_id: workspace,
        context: req.body.context || {},
        input: req.body.input || {}
    };

    // Send the input to the conversation service
    conversation.message(payload, function (err, data) {
        if (err) {
            return res.status(err.code || 500).json(err);
        }
        return res.json(updateMessage(payload, data));
    });
});

/**
* Updates the response text using the intent confidence
* @param  {Object} input The request to the Conversation service
* @param  {Object} response The response from the Conversation service
* @return {Object}          The response with the updated message
*/
function updateMessage(input, response) {
    var responseText = null;
    if (!response.output) {
        response.output = {};
    } else {
        return response;
    }
    if (response.intents && response.intents[0]) {
        var intent = response.intents[0];
        // Depending on the confidence of the response the app can return different messages.
        // The confidence will vary depending on how well the system is trained. The service will always try to assign
        // a class/intent to the input. If the confidence is low, then it suggests the service is unsure of the
        // user's intent . In these cases it is usually best to return a disambiguation message
        // ('I did not understand your intent, please rephrase your question', etc..)
        if (intent.confidence >= 0.75) {
            responseText = 'I understood your intent was ' + intent.intent;
        } else if (intent.confidence >= 0.5) {
            responseText = 'I think your intent was ' + intent.intent;
        } else {
            responseText = 'I did not understand your intent';
        }
    }
    response.output.text = responseText;
    return response;
}





module.exports = router;
