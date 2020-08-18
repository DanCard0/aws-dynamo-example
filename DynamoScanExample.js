var AWS = require("aws-sdk");

var credentials = new AWS.SharedIniFileCredentials({profile: 'dev'});
AWS.config.credentials = credentials;
AWS.config.update({region: 'us-east-1'});


// Create the DynamoDB service object
var ddb = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: 'productos-dev'
};

ddb.scan(params, onScan);
var count = 0;

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {        
        console.log("Scan succeeded.");
        data.Items.forEach(function(itemdata) {
           console.log("Item :", ++count,JSON.stringify(itemdata));
        });

    }
}