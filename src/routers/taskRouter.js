import express from 'express'
const router = express.Router()
let fakeDb = [
  { id: 1, task: 'washing', hr: 8, type: 'entry' },
  { id: 2, task: 'gaming', hr: 10, type: 'entry' },
  { id: 3, task: 'swimming', hr: 5, type: 'entry' },
  { id: 4, task: 'reading', hr: 15, type: 'entry' },
]
router.get('/', (req, res) => {
  res.json({
    status: 'success',
    msg: 'response from get',
    fakeDb,
  })
})

router.post('/', (req, res) => {
  const {task,hr}=req.body
  fakeDb.push(req.body)
  console.log(fakeDb)
  res.send({
    status:"success",
    msg:"new task has been added",
    fakeDb
  })
})

router.patch("/",(req,res)=>{
 const {id, type} = req.body
  fakeDb = fakeDb.map((task)=>{
    if(task.id===id){
      task.type=type
    }
    return task
  })
 res.json({
  status:"success",
  msg:"task has been updated",
  fakeDb
 })
})

router.delete('/:id',(req,res)=>{
  const {id} = req.params
  fakeDb = fakeDb.filter((task)=>task.id!==parseInt(id));
  res.json({
    status:"success",
    msg:"Task has been deleted",
    fakeDb
  })
})
export default router