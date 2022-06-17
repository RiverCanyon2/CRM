require('dotenv').config()
const AWS = require('aws-sdk')

const SESConfig = {
    apiVersion: "2012-08-10",
    accessKeyId: process.env.AWS_ACCESS_KEY,
    accessSecretKey: process.env.AWS_SECRET_KEY,
    region: "us-east-1"
}

AWS.config

console.log("Region: ", AWS.config.region)

AWS.config.update(SESConfig)

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'})

var params = {
    TableName: 'representatives',
    Item: {
        'ID' : {N: '001'},
        'full_name' : {S: 'Rico Suave'}
    }
}

ddb.putItem(params, function(err, data) {
    if (err) {
        console.log("Error", err)
    } else {
        console.log("Success", data)
    }
})