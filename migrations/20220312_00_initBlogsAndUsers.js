const  { DataTypes } = require('sequelize')
const { sequelize } = require('../util/db')

const up = async ({context:queryInterface}) => {
  await queryInterface.createTable('blogs',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    author: {
      type: DataTypes.TEXT
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usertoken: {
      type: DataTypes.TEXT,
      allowNull: true
    },  
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    }  
  })
  await queryInterface.createTable('users',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    } 
  })
  await queryInterface.addColumn('blogs','user_id',{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model:'users',key:'id'}
  })
}

const down = async ({context:queryInterface}) => {
  await queryInterface.dropTable('blogs')
  await queryInterface.dropTable('users')
}

module.exports = { up,down }