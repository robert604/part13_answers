const router = require('express').Router()

const { Blog } = require('../models')

const errorHandler = (error,req,res,next) => {
  console.error('got an error---------',error.message);
  return res.status(400).send({error:`got error${error.message}`})
}

router.get('/', async (req, res) => {
  const blogs = await Blog.findAll()
  res.json(blogs)
})

router.post('/', async (req, res,next) => {
  try {
    const blog = await Blog.create(req.body)
    res.json(blog)
  } catch(error) {
    next(error)    
    //return res.status(400).json({ error })
  }
})

const blogFinder = async (req, res, next) => {
  try {
    req.blog = await Blog.findByPk(req.params.id)
    next()
  } catch(error) {
    next(error)
  }
}




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

router.put('/:id', blogFinder,errorHandler, async (req, res,next) => {
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