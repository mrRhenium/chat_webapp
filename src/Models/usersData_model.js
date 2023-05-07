import mongoose from "mongoose";
const Schema = mongoose.Schema;

const invitationSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const friendSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "UserData",
    },
    chatId: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
    blockStatus: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userDataSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    avtar: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    onlineStatus: {
      type: Boolean,
      required: true,
    },
    friends: {
      type: [friendSchema],
      required: true,
    },
    invitations: {
      type: [invitationSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserData =
  mongoose.models.UserData || mongoose.model("UserData", userDataSchema);

export default UserData;
