student.findOne({ name: 'john' }, function (err, res) {
  console.log(res)
})
student.find({ age: { $qt: 29 } }, function (err, res) {
  console.log(res)
})
