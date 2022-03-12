const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Blog extends Model {}

Blog.init({
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
  year: {
    type: DataTypes.INTEGER,
    validate: { min:1991, max: new Date().getFullYear()}
  }
  /*created_at: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('NOW()')
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('NOW()')
  } */ 
},{
  sequelize,
  underscored: true,
  timestamps: true,
  modelName: 'blog'
})

module.exports = Blog