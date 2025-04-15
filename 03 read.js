// db.inventory.find() // Fetch all documents
// db.inventory.find({}) // Fetch all documents
// db.inventory.find({ qty: 70 })

// db.inventory.find( { tags: { $in: [ "red", "D" ] } } )
// db.inventory.find({ status: { $in: ['A', 'D'] } })

db.inventory.findOne({ item: 'paper' })
db.inventory.find({ "qty": { $lt: 50} })