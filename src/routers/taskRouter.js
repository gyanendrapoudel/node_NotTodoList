import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    status:"success",
    msg:"Response from get"
  })
})
router.post('/', (req, res) => {
  try {
    const {id} = req.body
    if(id===1){
        throw new Error("no body data")
    }
    res.status(200).send(req.body)
  } catch (error) {
    console.log(error)
    res.status(400).send({ msg : 'error occured' })
    
  }
})

export default router