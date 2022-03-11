const router = require('express').Router()

const { notEqual } = require('assert')
const { nextTick } = require('process')
const { User,Blog } = require('../models')
const { errorHandler,tokenExtractor,blogFinder } = require('./middleware')


router.get('/', async (req, res) => {
  const users = await User.findAll({
    include: {
      model: Blog,
      attributes: {
        exclude: ['userId']
      }
    }
  })
  res.json(users)
})

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.json(user)
  } catch(error) {
    return res.status(400).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id)
  if (user) {
    res.json(user)
  } else {
    res.status(404).end()
  }
})

router.put('/:username' //,tokenExtractor
, async (req, res,next) => {
  try {
    //const user = await User.findByPk(req.decodedToken.id)  
    const user = await User.findOne()
    if (user) {
      user.username = req.params.username
      await user.save()   
      res.json(user)
    } else {
      res.status(404).end()
    }
  } catch(error) {
    next(error)    
    //const mess = error.message || error
    //return res.status(400).json({mess})
  }
})

module.exports = router