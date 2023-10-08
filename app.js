require("dotenv").config()
const express = require("express")
const router = require("./routes/product")
const app = express()
const PORT = process.env.PORT || 5000

const product_route = require("./routes/product")
const brands_route = require("./routes/brandRoutes")
const connectDB = require("./db/connect")


app.get("/", (req, res) => {
    res.send("Hi I am live!!")
})

app.use("/api/products", product_route)
app.use("/api/brands", brands_route)

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server running at ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()