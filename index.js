// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve a simple page at "/"
app.get("/", (req, res) => {
  res.send("<h1>Hello from Express on DigitalOcean!</h1>");
});

// Optional: Serve static files from a "public" folder
app.use(express.static("public"));

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://0.0.0.0:${PORT}`);
});
