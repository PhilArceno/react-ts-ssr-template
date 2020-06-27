const express = require("express")
const app = express()
const path = require("path")
import { Request, Response, NextFunction} from "express"

app.use(express.static(path.join(__dirname, "..", "dist")))

const template = path.resolve(__dirname, "..", "index.html")
app.get("", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(template)
})

app.listen(4000, () => {
    console.log("Server running on port 4000")
})