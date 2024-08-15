import express from 'express';
import taskRouter from './src/routers/taskRouter.js'
import morgan from 'morgan'
import cors from 'cors'

import { connectionMongoose } from './src/config/dbConfig.js';
const app = express()
const PORT = 8000

app.use(morgan("combined"))
app.use(cors())
app.use(express.json())
connectionMongoose()
app.use('/api/v1/taskLists', taskRouter)


app.listen(PORT, (error)=>{
    error?console.log(error):console.log('PORT is listening on ',PORT)
})