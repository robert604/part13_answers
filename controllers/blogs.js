const router = require('express').Router()
const jwt = require('jsonwebtoken')
const { SECRET } = require('../util/config')
const { Blog, User, ReadingList } = require('../models')
const { tokenExtractor,blogFinder } = require('./middleware')
const { Op } = require('sequelize')

router.get('/', async (req, res) => {
  console.log('search',req.query.search)

  let where = {}
  if(req.query.search) {
    const search = {
      [Op.or]: [
        {
          title: {
            [Op.iLike]:'%'+req.query.search+'%'
          }
        },
        {
          author: {
            [Op.iLike]:'%'+req.query.search+'%'
          }
        }
      ]
    }
    where = {...where,...search}
  }
  const blogs = await Blog.findAll({
    attributes: {
      exclude: ['userId'],
      include: ['year']
    },
    include: [
      {
        model: User,
        attributes: ['name']
      }/*,
      {
        model:ReadingList,
        attributes: ['id','did_read'],
        through: { attributes:[]}
      }  */    
    ],
    where,
    order: [
      ['likes','DESC']
    ]
  })
  res.json(blogs)
})

router.post('/',tokenExtractor,async (req, res,next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id)
    if(!user) throw new Error('You must be logged in to create a blog')
    //const user = await User.findOne()
    console.log('post blog',req.body)
    const blog = await Blog.create({...req.body,userId: user.id,usertoken:req.token,date: new Date()})
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

router.delete('/:id',tokenExtractor, blogFinder, async (req, res,next) => {
  try {
    if (req.blog) {
      const decodedToken = jwt.verify(req.blog.usertoken, SECRET)

      if(decodedToken.id!==req.decodedToken.id) {
        throw new Error('Only the creator of the blog can delete it')
      }
      await req.blog.destroy()
    }
    res.status(204).end()
  } catch(error) {
    console.log('delete error',error)
    next(error)
  }
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