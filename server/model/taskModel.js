const Sequelize = require('sequelize')
const sequelize = require('../database/databaseConfig')

//Create model
const taskModel = sequelize.define('task', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    annotation: {
        type: Sequelize.TEXT,
        allowNull: false
    }

})

module.exports = taskModel