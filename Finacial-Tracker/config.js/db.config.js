require("dotenv").config();
//  console.log(process.env.USER);
module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  dialect: process.env.dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
 
// ENV file
// HOST: "ep-snowy-sea-a125sqdi-pooler.ap-southeast-1.aws.neon.tech"
// USER: "default"
// PASSWORD: "LlWspDTx76Vz"
// DB: "verceldb"
// dialect: "postgres"
