import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
  User: {
    type: Schema.Types.ObjectId("user"),
    required: true,
  },
  file:{
    type:String,
    required:true,
    default:""
  },
  likes:[{
    type:Schema.Types.ObjectId('liked')
  }],
  comments:[{
    type:Schema.Types.ObjectId('comments')
  }]
},{timestamps:true});

export default mongoose.model("post", PostSchema)