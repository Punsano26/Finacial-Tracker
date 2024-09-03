const {DataTypes} = require("sequelize");
const sequelize = require("./db");
//scema
const Financial = sequelize.define("financial", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMethod:{
    type: DataTypes.STRING,
    allowNull:false
  }
});

Financial.sync({force:false}).then(()=>{
    console.log("Table created or already exits");
}).catch((error)=>{
    console.log("Error can't created");
})

module.exports = Financial;