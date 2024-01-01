const express = require("express");
const app = express();
// const cors = require('cors')
// app.use((req, res, next) => {
//   
//     res.setHeader("Access-Control-Allow-Origin", "https://6592f199541fd5ddaa005114--imaginative-mooncake-18f71d.netlify.app/");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });
// app.use(cors())
app.use(express.json());
express.urlencoded({ extended: true });
app.use("/api", require("./foodItems"));
app.use("/api", require("./signUp"));
app.use("/api", require("./signIn"));
app.use("/api", require("./Orders"));
app.use("/api", require("./Myorders"));

app.listen(process.env.BASE_URL || 5000);
