require('dotenv').config()
const { Sequelize, QueryTypes } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

(async () => {
  await sequelize.authenticate()
  const blogs = await sequelize.query("SELECT * FROM blogs", {type:QueryTypes.SELECT})
  console.log(blogs)
  sequelize.close()

})()