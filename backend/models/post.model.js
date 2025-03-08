import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  title:{
    type:String,
    required:true,
    default:null
  },
  description:{
    type:String,
    required:true,
    default:null
  },
  link:{
    type:String,
    required:true,
    default:null
  },
  board:{
    type:Schema.Types.ObjectId,
    default:null,
  },
  file: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/.test(v);
      },
      message: "Invalid image URL format",
    },
  },
  likes: [{ type: Schema.Types.ObjectId, ref: "liked" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
}, { timestamps: true });

export default mongoose.model("post", PostSchema);