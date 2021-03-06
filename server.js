const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// URI allows Heroku to connect
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://JSiraco:rootroot@cluster0.iabgj.mongodb.net/FitnessDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/index.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
