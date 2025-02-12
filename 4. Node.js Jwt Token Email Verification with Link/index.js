require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");
const Roshan = require('./config/db');
const session = require("express-session");
// database connection
//connection();

// middlewares
app.use(express.json());
app.use(cors())

// Express-session
app.use(
	session({
	  secret: process.env.SESSION_SECRET,
	  resave: false,
	  saveUninitialized: false,
	  cookie: {
		secure: false,
		maxAge: 7 * 24 * 60 * 60 * 1000,
	  },
	})
  );


app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);



// routes
app.use("/api/users", userRoutes);     // Register
app.use("/api/auth", authRoutes);      // login
app.use("/api/password-reset", passwordResetRoutes); // Password - Reset

// Port 
try {
    app.listen(process.env.PORT);
    console.log("Code Run Sucessfully")
} catch (error) {
    console.log(""+""+error);
    
}