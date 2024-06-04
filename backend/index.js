import express from "express";
import mongoose from "mongoose";
import { CreateUser, getSingleUser} from "./Controllers/usercontroller.js";
import { createVendor } from "./Controllers/venuecontroller.js";
import cors from "cors";
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(cors());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

mongoose.connect("mongodb://127.0.0.1:27017/users")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.post("/register", (req, res) => {
    CreateUser(req, res); 
});

app.post("/login", (req, res) => {
    getSingleUser(req, res);
});

app.get("/login", (req, res) => {
    console.log(getEmail(req));
});

app.listen(4000, () => {
    console.log("Server running on localhost:4000");
});
