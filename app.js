import express from 'express';
import taskRouter from './src/routers/taskRouter.js'
const app = express()
const PORT = 8000

app.use(express.json())

app.use('/api/v1/taskLists', taskRouter)


app.listen(PORT, (error)=>{
    error?console.log(error):console.log('PORT is listening on ',PORT)
})