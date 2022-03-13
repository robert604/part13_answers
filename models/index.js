const Blog = require('./blog')
const User = require('./user')
const ReadingList = require('./readingList')

User.hasMany(Blog)
Blog.belongsTo(User)
//Blog.sync({alter: true})
//User.sync({alter: true})

User.belongsToMany(Blog,{through:ReadingList, as:'rlblog'})
Blog.belongsToMany(User,{through:ReadingList, as:'rluser'})

module.exports = {
  Blog, User, ReadingList
}