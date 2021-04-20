import express from "express";
import cors from "cors";
const app = express();

import "./config/dbConnect";
import studentRoutes from "./routers/studentRoutes";
app.use(cors());
app.use(express.json());


app.use("/students", studentRoutes);

const PORT = process.env.PORT || 4003;

app.listen(PORT, () => console.log("Server is up and running successfully!"));
