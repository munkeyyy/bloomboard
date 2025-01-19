import mongoose, { Schema } from "mongoose";

const LikesSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId("user"),
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId("post"),
      required: true,
    },
    isLiked: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("liked", LikesSchema);
