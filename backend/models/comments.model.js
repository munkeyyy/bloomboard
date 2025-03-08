import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref:"user",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref:"post",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("comment", CommentSchema);
