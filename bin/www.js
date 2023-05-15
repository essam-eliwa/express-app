// Desc: This file is the entry point for the application.
// It is responsible for setting up an HTTP server and listening for connections on the port specified in the configuration.

/**
 * Module dependencies.
 */

import app from "../app.js";
import mongoose from "mongoose";
import { createServer } from "http";
import dotenv from "dotenv";
dotenv.config();

/**
 * Get port from environment and store in Express.
 */

const PORT = process.env.PORT || "8000";
const HOST = process.env.HOST || "localhost";
const MURI = process.env.ATLAS_URI;


/**
 * Create HTTP server.
 */

const server = createServer(app);

// Connect to DB
mongoose
  .connect(MURI)
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(PORT);
    server.on("error", onError);
    server.on("listening", onListening);
    console.log(`Server running at http://${HOST}:${PORT}/`);
  })
  .catch((error) => {
    console.error("Mongo Error: " + error);
  });

/**
 * Listen on provided port, on all network interfaces.
 */

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = "Port " + PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = "Port " + addr.port;
  console.log("Listening on " + bind);
}
