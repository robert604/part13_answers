const express = require('express')
const { ReadingList } = require('../models')


const router = express.Router()

router.post('/',async (req,res) => {
  try {
    const rl = await ReadingList.create(req.body)
    res.json(rl)
  } catch(error) {
    next(error)
  }
})

module.exports = router