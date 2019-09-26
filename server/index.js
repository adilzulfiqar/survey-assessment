const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

const Port = process.env.PORT || 4000;
app.listen(Port, () => console.log(`Server is running at ${Port}`));
