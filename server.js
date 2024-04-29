import express from "express";
import cors from "cors";
import APIRoutes from "./src/Routes/index.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from 'path';
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const indexPath = path.join(__dirname, "HTML", "index.html");

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname , 'HTML')))


// Define API routes
app.use("/api", APIRoutes);

app.get("/", (req, res) => {
  // console.log(__dirname + "\\emailForm.html")
  // res.sendFile(__dirname + "\\emailForm.html")
  console.log(__dirname + " running")
  res.send( path.join(__dirname,"DevBook-Theme","index1.html"));
});



app.get("/rankByEmail", (req, res) => {
  console.log(__dirname + "\\emailForm.html");
  res.sendFile( path.join(__dirname,"HTML","emailForm.html"));
})

app.get("/uploadCv", (req, res) => {
  // console.log(__dirname + "\\uploadForm.html")
  res.sendFile(path.join(__dirname,"HTML","uploadForm.html"))
})

app.get("/rankRange", (req, res) => {
  console.log( "\\rankRange.html")
  res.sendFile(path.join(__dirname,"HTML","rankRange.html"))
})



// Define API routes
app.use("/api", APIRoutes);

// Error handling middleware for 404 errors
app.use("/api/*", (req, res, next) => {
  const err = new Error("Api Not Found");
  err.status = 404;
  next(err);
});

// Error handling middleware for other errors
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.json({
    error: err.message,
  });
});


//#endregion

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});