//
// This quickstart shows how to predict the intent of an utterance by using the LUIS REST APIs.
//
const requestPromise = require('request-promise');
const queryString = require('querystring');

// Analyze a string utterance.
async function getPrediction(utterance) {
    //////////
    // Values to modify.

    // YOUR-APP-ID: The App ID GUID found on the www.luis.ai Application Settings page.
    const LUIS_appId = "";

    // YOUR-PREDICTION-KEY: Your LUIS authoring key, 32 character value.
    const LUIS_predictionKey = "";

    // YOUR-PREDICTION-ENDPOINT: Replace this with your authoring key endpoint.
    const LUIS_endpoint = "";

    // The utterance you want to use.
    // const utterance = "I want two large pepperoni pizzas on thin crust please";
    //////////

    // Create query string
    const queryParams = {
        "show-all-intents": true,
        "verbose": true,
        "query": utterance,
        "subscription-key": LUIS_predictionKey
    }

    // Create the URI for the REST call.
    const URI = `${LUIS_endpoint}luis/prediction/v3.0/apps/${LUIS_appId}/slots/production/predict?${queryString.stringify(queryParams)}`

    // Send the REST call.
    const response = await requestPromise(URI);

    // Display the response from the REST call.
    return JSON.parse(response).prediction.topIntent;
}

module.exports = { getPrediction };
