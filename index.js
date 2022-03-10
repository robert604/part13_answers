require('dotenv').config()
const { Sequelize, Model,DataTypes,QueryTypes } = require('sequelize')
const express = require('express')
const res = require('express/lib/response')

const app = express()

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

class Blog extends Model {}

Blog.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author: {
    type: DataTypes.TEXT
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
},{
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'blog'
})

app.use(express.json())

app.get('/api/blogs',async (req,res) => {
  const blogs = await Blog.findAll()
  res.json(blogs);
})

app.post('/api/blogs',async (req,res) => {
  try {
    const blog = await Blog.create(req.body)
    res.json(blog)
  } catch(error) {
    console.log('Error while creating new blog:',error)
  }
})

app.delete('/api/blogs/:id',async (req,res) => {
  try {
    const blogId = req.params.id
    const blog = await Blog.findByPk(blogId)
    const result = await blog.destroy()
    console.log('after delete',result)
    res.json(result)

  } catch(error) {
    console.log('Error while deleting blog',error)
  }
})



const PORT = process.env.PORT || 3001

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`)
})