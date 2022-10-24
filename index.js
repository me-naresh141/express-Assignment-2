let express = require('express')

let app = express()

let loggar = require('morgan')
let cookieparser = require('cookie-parser')

// middelware
// console.log(__dirname+'/stylesheet')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/stylesheet'))
app.use(loggar('dev'))
app.use(cookieparser())

// routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/project.html')
})

app.get('/users', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.post('/users', (req, res) => {
  console.log(req.body)
})

// error handle middelware
// 404
app.use((req, res, next) => {
  res.sendFile(__dirname + '/error.html')
})

//client error
app.use((err, req, res, next) => {
  res.send(err)
})

app.listen(4000, () => {
  console.log('server listing port num 4000')
})
