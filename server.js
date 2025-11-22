const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// enable layouts
app.use(expressLayouts);
app.set("layout", "layout"); // default layout file

// static files
app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/projects", (req, res) => {
  const projects = [
      {
          name: "WebGPU Fluid Simulation",
          desc: "Real-time GPU-based fluid simulation demonstrating advanced graphics programming.",
          link: "https://github.com/mikerkoval/FluidSimulation",
          image: "/images/webgpu-screenshot.png"
      },
  ];
  res.render("projects", { title: "Projects", projects });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

