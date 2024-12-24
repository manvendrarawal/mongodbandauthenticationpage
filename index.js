const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtpassword = "123456";

const app = express();
app.use(express.json());

mongoose.connect("");

const User = mongoose.model