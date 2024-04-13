import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`Connected to Mongod Database `.bgGreen.white);
  } catch (error) {
    console.log(`Error in MONgodb ${error}.bgRed.white`);
  }
};
export default connectDB;
