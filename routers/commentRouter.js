const express = require('express')
const router = express.Router()
const Comment = require('../schemas/CommentSchema')

router.get('/', async(req, res) =>{
    try{
        const comments = await Comment.find()
        res.json(comments)
    }catch(err){
        console.log(err)
        res.send("Request failed")
    }
})

router.get('/:id', async(req, res) =>{
    try{
        const comment = await Comment.find({'crowdfundID' : req.params.id})
        res.json(comment)
    }catch(err){
        console.log(err)
        res.send("Request failed")
    }
})

router.post('/', async(req, res) => {
    const comment = new Comment({
        crowdfundID: req.body.id,
        content: req.body.content,
        user: req.body.user,
    })
    try{
        res.send("Request success")
    }catch(err){
        console.log(err)
        res.send("Request failed")
    }

})
router.delete('/', async(req, res) => {
    const comment = await Comment.findByIdAndDelete({'_id': req.body.id});
    res.send('Got a DELETE request at comment')
  })
module.exports = router;