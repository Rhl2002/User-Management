import { readFileSync } from "fs";
import User from "./userModel.js";
import connectDB from "./db.js";

const jsonData = JSON.parse(
  readFileSync("./heliverse_mock_data.json", "utf-8")
);
connectDB();
// connectDB();
const seedData = async () => {
  try {
    await User.deleteMany({});
    await User.insertMany(jsonData);
    console.log("Data seeded successfully");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
};
seedData();
