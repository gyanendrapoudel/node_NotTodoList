import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    hr: {
      type: Number,
      required: true,
      min: 1,
      max: [100, 'max hour per task is 100'],
    },
    type: {
      enum: ['entry', 'bad'],
    },
  },
  { timestamps: true }
)
export const TaskCollection = mongoose.model('Task', taskSchema)

