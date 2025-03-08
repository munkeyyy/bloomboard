import mongoose, { Schema } from "mongoose";

const BoardSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "post",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("board", BoardSchema);
