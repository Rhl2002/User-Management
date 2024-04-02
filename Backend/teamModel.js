import { Schema, model ,mongoose} from "mongoose";

const teamSchema = new Schema({
  id: Number,
  name: String,
  users: [
    {
      mongoid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      id: Number,
      first_name: String,
      last_name: String,
      email: String,
      gender: String,
      avatar: String,
      domain: String,
      available: Boolean,
    },
  ],
});

const Team =model("Team",teamSchema);

export default Team;