// index.js
const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

connectDB();

// app.get("/", (req, res) => {
//   res.send("Hey this is my API running 🥳");
// });

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

// Serve frontend

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set env PRODUCTION"));
}

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT} `);
});

// Export the Express API
// module.exports = app;
