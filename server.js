import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'

//configure env
dotenv.config();
// if in other folder  dotenv.config({path:''});

//database config
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));


//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  //   res.send({
  //     message: "Welcome to ecommerce app",
  //   });
  res.send("<h1>welcome to ecommerce website<h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`SERVER running on ${PORT}`.bgCyan.white);
});
