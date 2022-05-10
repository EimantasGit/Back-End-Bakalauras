const express = require('express')
const { db } = require('../schemas/UserSchema')
const router = express.Router()
const User = require('../schemas/UserSchema')

router.get('/', async(req, res) =>{
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        console.log(err)
        res.send("Request failed")
    }
})
router.post('/', async(req, res) => {
    const user = new User({
      wallet: req.body.wallet,
      name: req.body.name,
      email: req.body.email,
      initialized: req.body.initialized
    })
    try{
        await user.save()
        res.send("Request success")
    }catch(err){
        console.log(err)
        res.send("Request failed")
    }

})
router.put('/contributed/:wallet', async(req, res) => {
    User.updateOne(
        { wallet: req.body.wallet },
        { $addToSet: { contributed: [req.body.contributed] } },
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        }
      );
})
router.put('/bookmarked/:wallet', async(req, res) => {
    User.updateOne(
        { wallet: req.body.wallet },
        { $addToSet: { bookmarked: [req.body.bookmarked] } },
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        }
      );
})
router.put('/:wallet', async(req, res) => {
    User.updateOne(
        { wallet: req.body.wallet },
        { name: req.body.name },
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        }
      );
})
router.get('/:wallet', async(req, res) =>{
  try{
      const user = await User.findOne({'wallet' : req.params.wallet})
      res.json(user)
  }catch(err){
      console.log(err)
      res.send("Request failed")
  }
})

router.delete('/bookmarked/:wallet', async(req, res) => {
  const user = await User.findOne({'wallet' : req.params.wallet})
  user.save();
  User.findOneAndUpdate(
    { wallet: req.body.wallet },
    { $pull: { bookmarked: req.body.id } },
    {safe: true},
    function(err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
})
module.exports = router;