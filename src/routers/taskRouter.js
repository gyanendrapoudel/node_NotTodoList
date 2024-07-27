import express from 'express'
const router = express.Router()
let fakeDb =[]

router.post('/', (req, res) => {
  const {task,hr}=req.body
  fakeDb.push(req.body)
  res.json({
    status:"success",
    msg :"new task has been added"
  })
})

export default router