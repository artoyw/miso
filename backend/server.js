// Importing required modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './firebase.js';
import dotenv from 'dotenv';

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const db = require("./firebase.js");
// const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json()); // must keep this...


// enable CORS for specific routes or origins ??
app.use(cors({
  origin: 'https://miso-eight.vercel.app/' // Allow only this origin
}));

// Your API routes will go here...
app.use(express.json())

app.get("/users", async (req, res) => {
    try {
        const usersSnapshot = await db.collection("users").get();
        const users = usersSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET: Endpoint to retrieve all tasks

// CREATE
// POST: Endpoint to add a new task

// DELETE: Endpoint to remove a task

// Setting the port for the server to listen on
const PORT = process.env.PORT || 3001;

// Starting the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});