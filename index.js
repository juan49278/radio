const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('page'))

app.listen(port, () => {
    console.log(`Lanzando Mi APP en el puerto ${port}`)
  })