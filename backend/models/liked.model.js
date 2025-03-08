const LikesSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user", required: true },
    post: { type: Schema.Types.ObjectId, ref: "post", required: true },
  },
  { timestamps: true }
);

LikesSchema.index({ user: 1, post: 1 }, { unique: true });

export default mongoose.model("liked", LikesSchema);
