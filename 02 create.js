db.inventory.insertOne({
  item: 'canvas',
  qty: 100,
  tags: ['cotton'],
  size: { h: 28, w: 35.5, uom: 'cm' }
})

db.inventory.insertOne({
  item: 'guava',
  qty: 40,
  tags: ['silk'],
  size: { h: 10, w: 32.5, uom: 'm' }
})

// db.inventory.insertMany([
//   {
//     item: 'canvas1',
//     qty: 100,
//     tags: ['cotton'],
//     size: { h: 28, w: 32.5, uom: 'm' }
//   },
//   {
//     item: 'canvas2',
//     qty: 50,
//     tags: ['copper'],
//     size: { h: 24, w: 33.5, uom: 'km' }
//   },
//   {
//     item: 'canvas3',
//     qty: 30,
//     tags: ['zinc'],
//     size: { h: 22, w: 38.5, uom: 'gm' }
//   },
//   {
//     item: 'canvas4',
//     qty: 70,
//     tags: ['aluminium'],
//     size: { h: 27, w: 31.5, uom: 'miles' }
//   },
//   {
//     item: 'canvas5',
//     qty: 90,
//     tags: ['silver'],
//     size: { h: 29, w: 33.5, uom: 'kilomiles' }
//   }
// ])

// db.inventory.insertMany([
//   {
//     item: 'journal',
//     qty: 25,
//     tags: ['blank', 'red'],
//     size: { h: 14, w: 21, uom: 'cm' }
//   },
//   {
//     item: 'mat',
//     qty: 85,
//     tags: ['gray'],
//     size: { h: 27.9, w: 35.5, uom: 'cm' }
//   },
//   {
//     item: 'mousepad',
//     qty: 25,
//     tags: ['gel', 'blue'],
//     size: { h: 19, w: 22.85, uom: 'cm' }
//   }
// ])

db.inventory.insertMany([
  { item: 'journal', qty: 25, size: { h: 14, w: 21, uom: 'cm' }, status: 'A' },
  {
    item: 'notebook',
    qty: 50,
    size: { h: 8.5, w: 11, uom: 'in' },
    status: 'A'
  },
  { item: 'paper', qty: 100, size: { h: 8.5, w: 11, uom: 'in' }, status: 'D' },
  {
    item: 'planner',
    qty: 75,
    size: { h: 22.85, w: 30, uom: 'cm' },
    status: 'D'
  },
  {
    item: 'postcard',
    qty: 45,
    size: { h: 10, w: 15.25, uom: 'cm' },
    status: 'A'
  }
])
