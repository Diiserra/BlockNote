const task = require('../model/taskModel')


module.exports = {

    started: (req, res) =>{
        task.sync()
    },

    create:  (req, res) =>{
        const title = req.body.title
        const annotation = req.body.annotation
        task.create({ title, annotation })
        res.status(200).send('OK')
    },

    read: async (req, res) =>{
        const data = await task.findAll()
        res.status(200).json(data)
    },

    uptade: (req, res) =>{
        const title = req.body.title
        const annotation = req.body.annotation
        const id = req.params.id

        task.update({ title, annotation}, {
            where: {
                id: id
            }
        })

        res.status(200).send('Atualizado')
    }, 

    delete: (req, res) =>{
        const id = req.params.id
        
        task.destroy({
            where:{
                id: id
            }
        })

        res.status(200).send('Deletado')
    }

}