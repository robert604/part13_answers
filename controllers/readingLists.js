const express = require('express')
const { errorHandler,tokenExtractor,blogFinder } = require('./middleware')
const { ReadingList,User } = require('../models')


const router = express.Router()

router.get('/', async (req, res) => {
  const users = await ReadingList.findAll({
  })
  res.json(users)
})

router.post('/',async (req,res) => {
  try {
    const rl = await ReadingList.create(req.body)
    res.json(rl)
  } catch(error) {
    next(error)
  }
})

router.put('/:readinglist_id' ,tokenExtractor
, async (req, res,next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id)
    const reading = await ReadingList.findByPk(req.params.readinglist_id)

    if(user && reading) {
      if(user.id!==reading.userId) throw new Error('Incorrect user to modify reading list')
      reading.did_read = req.body.did_read
      await reading.save()   
      res.json(reading)
    } else {
      res.status(404).end()
    }
  } catch(error) {
    next(error)    

  }
})

module.exports = router