const express 	= require('express');
const alexa 	= require('ask-sdk');
const app 		= module.exports = express();

const BASE_URL = '/alexa';

let skill;

app.post( BASE_URL, function(req, res) {

    if (!skill) { 
      skill = alexa.SkillBuilders.custom()
        .addRequestHandlers( 
          LaunchRequestHandler,
          ReadMyNotificationsIntentIntentHandler,
          HelpIntentHandler,
          CancelAndStopIntentHandler,
          SessionEndedRequestHandler
        )
        .addErrorHandlers(ErrorHandler)
        .create();
    }

    skill.invoke(req.body)
      .then(function(responseBody) {
        res.json(responseBody);
      })
      .catch(function(error) {
        console.log(error);
        res.status(500).send('Error during the request');
      });

});

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to Ariba Notifications service!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Ariba - Alexa', speechText)
      .getResponse();
  }
};

const ReadMyNotificationsIntentIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'ReadMyNotificationsIntent';
  },
  handle(handlerInput) {
    const speechText = 'You do not have notifications yet!!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Ariba - Alexa', speechText)
      .getResponse();
  }
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'Commands available: Read Notifications';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Ariba - Alexa', speechText)
      .getResponse();
  }
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'See you next!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Ariba - Alexa', speechText)
      .getResponse();
  }
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder.getResponse();
  }
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    return handlerInput.responseBuilder
      .speak('Sorry, I cant understand the command. Please say again.')
      .reprompt('Sorry, I cant understand the command. Please say again.')
      .getResponse();
  },
};

