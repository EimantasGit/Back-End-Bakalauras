const express = require('express')
const router = express.Router()
const Crowdfund = require('../schemas/CrowdfundSchema')

router.get('/', async(req, res) =>{
    try{
        const crowdfunds = await Crowdfund.find()
        res.json(crowdfunds)
    }catch(err){
        console.log(err)
        res.send("Request failed")
    }
})

router.get('/:id', async(req, res) =>{
    try{
        const crowdfund = await Crowdfund.findOne({'id' : req.params.id})
        res.json(crowdfund)
    }catch(err){
        console.log(err)
        res.send("Request failed")
    }
})

router.post('/', async(req, res) => {
    const crowdfund = new Crowdfund({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        mission: req.body.mission,
        website: req.body.website,
        twitter: req.body.twitter
    })

    try{
       await crowdfund.save()
        res.send("Request success")
    }catch(err){
        console.log(err)
        res.send("Request failed")
    }

})

router.put('/:id', async(req, res) => {
    Crowdfund.updateOne(
        { id: req.body.id },
        { $addToSet: { followers: [req.body.wallet] } },
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        }
      );
})
module.exports = router;