const express = require('express')
const app = express()
const port = 8080 
app.use(express.static("views"))

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname })
})

app.get('/test1', (req, res) => {
  res.sendFile('test1.html', {root: __dirname })
})

app.listen(port, () => {
  console.log(`Valy on localhost:${port}`)
})