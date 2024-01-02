const express = require("express");
const app = express();
// const cors = require('cors')
const FRONT_URL = process.env.FRONT_URL
app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", `${FRONT_URL} || http://localhost:3000`);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    console.log("FRONT END URL", FRONT_URL);
    console.log("BACKEND URL", process.env.BASE_URL);
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
app.use("/", (req, res) => {
    res.send("I m backend ")
    console.log("backend")
})

app.listen(process.env.BASE_URL || 5000);
