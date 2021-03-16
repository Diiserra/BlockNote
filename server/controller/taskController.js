const task = require('../model/taskModel')


module.exports = {

    started: (req, res) =>{
        res.render('home')
        task.sync()
    },

    create: async  (req, res) =>{
        const title = req.body.title
        const annotation = req.body.annotation
        const jsonTask = await task.create({ title, annotation })
        res.status(200).json(jsonTask)
    },

    read: async (req, res) =>{
        const data = await task.findAll()
        res.status(200).render('tasks')
    },

    findById: async (req, res) =>{
        const id = req.params.id
        const data = await task.findByPk(id)
        res.status(200).json(data)
    },
    
    listAll: async (req, res) =>{
        const data = await task.findAll()
        res.status(200).json(data)
    },


    uptade: async (req, res) =>{
        const title = req.body.title
        const annotation = req.body.annotation
        const id = req.params.id

        const jsonTask = await task.update({ title, annotation}, {
            where: {
                id: id
            }
        })

        res.status(200).json(jsonTask)
    }, 

    delete: async (req, res) =>{
        const id = req.params.id
        
        const jsonTask = await task.destroy({
            where:{
                id: id
            }
        })

        res.status(200).json(jsonTask)
    }

}
