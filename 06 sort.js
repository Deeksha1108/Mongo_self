db.inventory.find().limit(1)
db.inventory.find().skip(1)

db.inventory.insertMany([
  { item: 'journal', qty: 25, tags: ['blank', 'red'] },
  { item: 'mat', qty: 38, tags: ['gray'] },
  { item: 'mousepad', qty: 25, tags: ['gel', 'blue'] }
])
db.inventory.find().sort({ qty: -1 })
db.inventory.find().sort({ qty: 1 })

// Achieving Pagination using MongoDB find and limit
// pageNo
// 1 to 10
// no = 8
db.inventory.find().skip((pageNo-1)*no).limit(no)
// pageNo = 1 db.inventory.find().skip(0).limit(8)
// pageNo = 2 db.inventory.find().skip(8).limit(8)
