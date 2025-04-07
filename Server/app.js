import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import cookieParser from "cookie-parser";
import DBStore from "connect-mongo";

//* Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
colors.enable();
const PORT = process.env.PORT || 8000;
const cookie_expire = 1000 * 60 * 60 * 24;

//* Database
mongoose.connect("mongodb://127.0.0.1:27017/TaskManager");

//* Server
const app = express();

app.listen(PORT, () => {
  console.log("\n________________________________");
  console.log("\nTesting\n");
  console.log(
    "Link: ".cyan + ("127.0.0.1:" + PORT + "/Login").yellow.italic + "\n\n"
  );
});

//* Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set("views", path.join(__dirname, "View"));
app.set("view engine", "ejs");

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.SECRET || "temporary code",
    store: DBStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/TaskManager",
      collectionName: "Sessions",
    }),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: cookie_expire,
    },
  })
);

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET"],
  })
);

//* Route
import route from "./Route/main_Route.js";
app.use("/", route);
