const express = require("express");
const app = express();
const cors = require("cors");
const billingRoutes = require("./routes/billing");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api", billingRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
