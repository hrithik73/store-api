import express from 'express';
import cors from "cors"

import { products, categories } from "./src/products.js"


const app = express()
const port = 3000


app.use(cors());

app.get('/', (req, res) => {
  res.send({
    github: "https://github.com/hrithik73"
  })
})

app.get("/categories", (req, res) => {
  res.send(categories)
})

app.get("/products", (req, res) => {
  res.send(products)
})

app.get("/products/catID/:catID", (req, res) => {
  const { catID } = req.params
  const productsByCatID = products.filter((item) => item.catID === catID)
  res.send(productsByCatID)
})


app.listen(port, () => console.log("🚀 Server ready at: http://localhost:3000"))