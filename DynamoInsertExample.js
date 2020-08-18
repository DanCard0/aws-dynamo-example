// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
var credentials = new AWS.SharedIniFileCredentials({profile: 'dev'});
AWS.config.credentials = credentials;
AWS.config.update({region: 'us-east-1'});

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
    RequestItems: {
      "productos-dev": [
         {
           PutRequest: {
             Item: {
               "marca": { "S": "TESLA" },
                 "referencia": { "S": "Model X" },
                 "precio": {"N": "95000"}
             }
           }
         },
         {
           PutRequest: {
             Item: {
              "marca": { "S": "AUDI" },
              "referencia": { "S": "Q7" },
              "precio": {"N": "120000"}
             }
           }
         },
         {
          PutRequest: {
            Item: {
             "marca": { "S": "BMW" },
             "referencia": { "S": "Serie 1" },
             "precio": {"N": "50000"}
            }
          }
        },
        {
          PutRequest: {
            Item: {
             "marca": { "S": "TESLA" },
             "referencia": { "S": "Model 3" },
             "precio": {"N": "30000"}
            }
          }
        }
      ]
    }
  };
  
  ddb.batchWriteItem(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});