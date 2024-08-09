import express from 'express'
import mongoose from 'mongoose'
const router = express.Router()
let fakeDb = [
  { id: 1, task: 'washing', hr: 8, type: 'entry' },
  { id: 2, task: 'gaming', hr: 10, type: 'entry' },
  { id: 3, task: 'swimming', hr: 5, type: 'entry' },
  { id: 4, task: 'reading', hr: 15, type: 'entry' },
]
const taskSchema = new mongoose.Schema({},{strict:false})
const TaskCollection = mongoose.model('Task',taskSchema)

router.get('/', async (req, res) => {
  const tasks = await TaskCollection.find({},{_id:0})
  res.json({
    status: 'success',
    msg: 'response from get',
    tasks,
  })
})

router.post('/', async (req, res) => {
  const {task,hr}=req.body
  const result = await TaskCollection({task,hr}).save()
  console.log(result)
  
  res.send({
    status:"success",
    msg:"new task has been added",
    result
  })
})

router.patch("/", async (req,res)=>{
 const {id:_id, ...rest} = req.body
 console.log(rest)
const result = await TaskCollection.findByIdAndUpdate(_id, rest)

res.json({
  status:"success",
  msg:"task has been updated",
  result
 })
})

router.delete('/:id', async (req,res)=>{
  const {id} = req.params
  
  const result = await TaskCollection.deleteOne({_id:id})
  console.log(result)
  res.json({
    status:"success",
    msg:"Task has been deleted",
    result
  })
})
export default router