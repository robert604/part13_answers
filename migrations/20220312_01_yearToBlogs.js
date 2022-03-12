const  { DataTypes } = require('sequelize')
const { sequelize } = require('../util/db')

const up = async ({context:queryInterface}) => {
  await queryInterface.addColumn('blogs','year',{
      type: DataTypes.INTEGER,
      validate: { min:1991, max: new Date().getFullYear()}
  })

}

const down = async ({context:queryInterface}) => {
  await queryInterface.removeColumn('blogs','year')
}

module.exports = { up,down }