
const { Blog, User } = require('../models')
const { SECRET } = require('../util/config')

const errorHandler = (error,req,res,next) => {
  console.error('got an error---------',error.message);
  return res.status(400).send({error:`got error${error.message}`})
}

const tokenExtractor = (req, res, next) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    try {
      req.decodedToken = jwt.verify(authorization.substring(7), SECRET)
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