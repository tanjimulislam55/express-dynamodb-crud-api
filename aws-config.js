require('dotenv').config()

module.exports = {
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: process.env.region,
  tableName: process.env.tableName
}
