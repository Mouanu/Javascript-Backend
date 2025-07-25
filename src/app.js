

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

console.log("Allowed CORS_ORIGIN:", process.env.CORS_ORIGIN);


app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))

app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({extended: true, 
    limit:"16kb"}))

app.use(express.static("public"))
app.use(cookieParser())


// routes
import userRouter from "./routes/user.routes.js";


// routes declaration--> routes ante gele middleware use korte hobe
app.use("/api/v1/users", userRouter);

export {app}