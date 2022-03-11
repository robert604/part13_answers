const router = require('express').Router()

const { Blog, User, UserToken } = require('../models')
const { tokenExtractor,blogFinder } = require('./middleware')


router.get('/', async (req, res) => {
  const blogs = await Blog.findAll({
    attributes: {
      exclude: ['userId'],
    },
    include: {
      model: User,
      attributes: ['name']
    }
  })
  res.json(blogs)
})

router.post('/',tokenExtractor
, async (req, res,next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id)

    //const user = await User.findOne()
    console.log('post user',user)
    const blog = await Blog.create({...req.body,userId: user.id,userToken:req.token,date: new Date()})
    res.json(blog)
  } catch(error) {
    next(error)    
    //return res.status(400).json({ error })
  }
})


router.get('/:id', blogFinder, async (req, res) => {
  if (req.blog) {
    res.json(req.blog)
  } else {
    res.status(404).end()
  }
})

router.delete('/:id', blogFinder, async (req, res) => {
  if (req.blog) {
    await req.blog.destroy()
  }
  res.status(204).end()
})

router.put('/:id', blogFinder, async (req, res,next) => {
  if (req.blog) {
    req.blog.likes = req.body.likes
    await req.blog.save()
    res.json(req.blog)
  } else {
    const error = new Error("Can't find blog for changing likes")
    next(error)
    //res.status(404).end()
  }
})

module.exports = router