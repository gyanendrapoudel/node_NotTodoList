import { mongoose } from "mongoose";
const str =
  'mongodb+srv://Gyanendra:Gyan1234@nodeexpressproject.af7crgh.mongodb.net/online_ntdl?retryWrites=true&w=majority&appName=NodeExpressProject'
  export const connectionMongoose = ()=>{

mongoose.connect(str).then(()=>console.log('Connected to DB')).catch((error)=>console.log('something went wrong'))
        
   
  } 