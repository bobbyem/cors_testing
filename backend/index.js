const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "http://frontend" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "I hear you!" });
});

app.listen(3000, () => console.log("listening on port 3000"));
