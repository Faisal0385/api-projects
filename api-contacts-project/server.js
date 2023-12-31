const express = require("express")
const dotenv = require("dotenv").config()
const contactRoutes = require("./routes/contactRoutes")
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use("/api/contacts", contactRoutes)

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`)
})