import express, { Express } from "express";
import { configDotenv } from "dotenv";
import cors from 'cors'
import router from "./routes";

configDotenv()

const PORT = process.env.PORT || 5000

const app: Express = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
} catch (e) {
    console.log(e)
}