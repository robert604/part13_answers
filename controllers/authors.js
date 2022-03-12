const express = require('express')
const { Op,fn,col } = require('sequelize')
const { Blog } = require('../models')
const sequelize = require('sequelize')


const router = express.Router()

router.get('/',async (req,res) => {
  const authors = await Blog.findAll({
    group:'author',
    attributes:[
      'author',
      [fn('count',col('id')),'articles'],
      [fn('sum',col('likes')),'likes']
    ],

  })

  res.json(authors)
})

module.exports = router