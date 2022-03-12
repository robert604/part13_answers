const jwt = require('jsonwebtoken')
const { Blog, User } = require('../models')
const { SECRET } = require('../util/config')

const errorHandler = (error,req,res,next) => {
  let mess = error.message || JSON.stringify(error)
  if(/Validation isEmail/.test(mess)) {
    mess = "Username must be an email address"
  }
  console.error('got an error---',mess);
  return res.status(400).send({error: `${mess}`})
}

const tokenExtractor = (req, res, next) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    try {
      req.token = authorization.substring(7)
      req.decodedToken = jwt.verify(req.token, SECRET)
    } catch{
      res.status(401).json({ error: 'token invalid' })
    }
  } else {
    res.status(401).json({ error: 'token missing' })
  }
  next()
}


const blogFinder = async (req, res, next) => {
  try {
    req.blog = await Blog.findByPk(req.params.id)
    next()
  } catch(error) {
    next(error)
  }
}

module.exports = { errorHandler,tokenExtractor,blogFinder }