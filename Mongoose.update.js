student.findOneAndUpdate(
  { name: 'deeksha' },
  { overwrite: true, new: true },
  function (err, res) {
    console.log(res)
  }
)