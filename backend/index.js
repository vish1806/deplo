import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from 'path';
// import { fileURLToPath } from 'url';



// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

const corsOptions = {
  origin: 'https://bidhub-frontend.vercel.app',
  credentials: true,
  optionSuccessStatus: 200,
};



dotenv.config();
connectDB();






app.use(cors(corsOptions));








app.use(express.json());
app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname,'./client/build')))

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// app.use('*',function(res,req){
//   res.sendFile(path.join(__dirname, './client/build/index.html'))
// });

// app.get("/", (req,res){
//   res.send("<h1>Welcome to BidHub</h1>")
// });

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
