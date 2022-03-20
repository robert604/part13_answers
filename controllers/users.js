const router = require('express').Router()

const { notEqual } = require('assert')
const { user } = require('pg/lib/defaults')
const { nextTick } = require('process')
const { User,Blog,ReadingList } = require('../models')
const { errorHandler,tokenExtractor,blogFinder } = require('./middleware')


router.get('/', async (req, res) => {
  const users = await User.findAll({
    include: [
      {
        model: Blog,
        attributes: {
          exclude: ['userId','usertoken','createdAt','updatedAt']
        }
      },
      {
        model:Blog,
        as: 'readings',
        attributes: {
          exclude: ['userId','usertoken','createdAt','updatedAt'],
        },
        through: {
          attributes:[]
        }
      }      
    ]
  })
  res.json(users)
})

router.post('/', async (req, res,next) => {
  try {
    const user = await User.create(req.body)
    res.json(user)
  } catch(error) {
    //return res.status(400).json({ error })
    next(error)
  }
})

router.get('/:id', async (req, res) => {
  let where = {}
  if(req.query.read==='true') {
    where = { '$readings.readingLists.did_read$':true }
  } else if(req.query.read==='false') {
    where = { '$readings.readingLists.did_read$':false }
  }

  const user = await User.findByPk(req.params.id,{
    include:
      {
        model:Blog,
        as: 'readings',
        attributes: { exclude: ['userId','usertoken','createdAt','updatedAt']},
        through: {
          attributes: ['id','did_read'],
          where    
        },
      }
  })

  if (user) {
    res.json(user)
  } else {
    res.status(404).end()
  }
})

router.put('/change/:id',async (req,res) => {
  const user = await User.findByPk(req.params.id)
  if(req.query.disabled==='true') {
    user.disabled = true
  } else if(req.query.disabled==='false') {
    user.disabled = false
  }
  await user.save()
  res.json(user)
  //console.log('user put',user)
})

router.put('/:username' ,tokenExtractor, async (req, res,next) => {
  try {
    const user = req.decodedUser //await User.findByPk(req.decodedToken.id)  
    //const user = await User.findOne()
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