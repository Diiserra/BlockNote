const Sequelize = require('sequelize')
const sequelize = new Sequelize('blocknote', 'root', 'serra', {
    host: 'localhost',
    dialect: 'mysql'
})


sequelize.authenticate().then(() =>{
    console.log(('Connect..'));
})

module.exports = sequelize