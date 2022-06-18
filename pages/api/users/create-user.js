require('dotenv').config()
const { v4: uuidv4 } = require('uuid')
const AWS = require('aws-sdk')

const SESConfig = {
    apiVersion: "2012-08-10",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1"
}
AWS.config.update(SESConfig)
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'})


const createUser = (req,res) => {
  const { first, last, email, profile, tempPw } = req.body.userInfo
  var params = {
    TableName: 'representatives',
    Item: {
        'ID' : {S: uuidv4()},
        'full_name' : {S: `${first} ${last}`},
        'email' : {S: email},
        'profile' : {S: profile},
        'tempPw' : {S: tempPw }
    }
}

  const response = ddb.putItem(params, function(err, data) {
      if (err) {
          console.log("Error", err)
          res.send({status: "Success"})
      } else {
          console.log("Success", data)
          res.send({status: "Success"})
      }
  })
}

export default createUser