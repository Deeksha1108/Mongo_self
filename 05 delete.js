db.inventory.deleteOne(
  { item: 'guava' },
  { qty: 40 },
  { tags: ['silk'] },
  { size: { h: 10, w: 32.5, uom: 'm' } }
)

db.inventory.insertOne({
  _id: ObjectId('563237a41a4d68582c2509da'),
  stock: 'Brent Crude Futures',
  qty: 250
})

db.inventory.deleteOne({ _id: ObjectId('563237a41a4d68582c2509da') })

db.orders.insertOne(
  { _id: ObjectId('563237a41a4d68582c2509da') },
  { w: 'majority', wtimeout: 100 }
)

db.orders.deleteOne(
  { _id: ObjectId('563237a41a4d68582c2509da') },
  { w: 'majority', wtimeout: 100 }
)

db.inventory.insertMany([
  { _id: 1, category: 'café', status: 'A' },
  { _id: 2, category: 'cafe', status: 'a' },
  { _id: 3, category: 'cafE', status: 'a' }
])

db.inventory.deleteMany([
  { _id: 1, category: 'café', status: 'A' },
  { _id: 3, category: 'cafE', status: 'a' }
])