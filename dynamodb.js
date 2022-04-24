const AWS = require("aws-sdk");
const config = require("./aws-config.js");

class DynamoDB {
  constructor() {
    AWS.config.update({
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
      region: config.region,
    });
    this.docClient = new AWS.DynamoDB.DocumentClient();
  }

  async get() {
    return this.docClient.scan({ TableName: config.tableName }).promise();
  }
  
  async set(body) {
    await this.docClient
      .put({ TableName: config.tableName, Item: body })
      .promise();
      return body
  }
}

module.exports = DynamoDB;
