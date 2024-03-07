require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const sendReceiveRoute = require("./router/send-receive-router");
const buySellRoute = require("./router/buy-sell-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const walletRoute = require('./router/wallet-router');

const corsOptions = {
  origin: "http://localhost",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/form", sendReceiveRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use("/api/gold", walletRoute);
app.use("/api", buySellRoute);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to App");
});

app.get("/login", (req, res) => {
  res.status(200).send("Welcome to Login page");
});

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port 5000`);
  });
});
