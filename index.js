const express = require('express')
const mongoose = require('mongoose')
const server = express()
const studentSchema = new Schema({ name: 'Alice', email: 'alice@example.com', age: 25 })
server.use(express.static('public'))
const Schema = mongoose.Schema

const Student = mongoose.model('Student', studentSchema)

// server.use(bodyParser.json())
// server.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/newDB', { useNewUrlParser: true, useUnifiedTopology: true })
.then(st => console.log('User Created:', user))
  Student.find({ age: { $gt: 15 } }, (err, res) => {
    if (err) throw err
    res.json(res)
  })
  Student.save()
  .then(user => console.log('User Created:', user))
  .catch(err => console.error(err));


// server.post('/students', (req, res) => {
//   res.send('Post request to home')
// })

server.listen(8080, () => {
  console.log('Server Started!')
})