const  { DataTypes } = require('sequelize')
const { sequelize } = require('../util/db')

const up = async ({context:queryInterface}) => {
  await queryInterface.createTable('reading_lists',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model:'users',key:'id'}
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model:'blogs',key:'id'}
    }, 
  })
}

const down = async ({context:queryInterface}) => {
  await queryInterface.dropTable('reading_lists')
}

module.exports = { up,down }