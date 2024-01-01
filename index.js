const express = require("express");
const app = express();
// const cors = require('cors')
app.use((req, res, next) => {
  
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
// app.use(cors())
app.use(express.json());
express.urlencoded({ extended: true });
app.use("/api", require("./foodItems"));
app.use("/api", require("./signUp"));
app.use("/api", require("./signIn"));
app.use("/api", require("./Orders"));
app.use("/api", require("./Myorders"));

app.listen(process.env.BASE_URL || 5000);
