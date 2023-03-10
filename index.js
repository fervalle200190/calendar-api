const express = require("express")
const { dbConnection } = require("./database/config")
require("dotenv").config()
const cors = require("cors")

const port = process.env.PORT

const app = express()

dbConnection()

app.use(cors())

app.use(express.static("public"))

app.use(express.json())

app.use("/api/auth", require("./routes/auth"))

app.use("/api/events", require("./routes/events"))

app.listen(port, () => {
     console.log(`servidor corriendo en puerto ${port}`)
})
