import mongoose from "mongoose";
import uniqueValidtor from "mongoose-unique-validator";
const schema = mongoose.Schema;

const UserSchema = new schema({
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
  userType: {
    type: String,
    required: true,
  },
});
UserSchema.plugin(uniqueValidtor);
const Users = mongoose.model("Users", UserSchema);
export default Users;
