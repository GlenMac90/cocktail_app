import mongoose, { Document, Schema } from "mongoose";

type drinkType = {
  apiId: string;
  name: string;
  image: string;
};

const drinkSchema = new Schema<drinkType>({
  apiId: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
});

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  name: string;
  favouriteDrinks: drinkType[];
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  favouriteDrinks: { type: [drinkSchema], default: [] },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
