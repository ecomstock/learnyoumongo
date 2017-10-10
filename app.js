//learnyoumongo 4
let mongo = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/learnyoumongo'
let baselineAge = process.argv[2]

mongo.connect(url, (err, db) => {
	if (err) throw err
	let parrots = db.collection('parrots')
	parrots.find({
		age: {
			$gt: +baselineAge
		}
	}, {
		name: 1,
		age: 1,
		_id: 0
	}).toArray((err, docs) => {
		if (err) throw err
		console.log(docs)
		db.close()
	})
})

// //learnyoumongo 3
// let mongo = require('mongodb').MongoClient
// let url = 'mongodb://localhost:27017/learnyoumongo'
// let baselineAge = process.argv[2]

// mongo.connect(url, (err, db) => {
// 	if (err) throw err
// 	let parrots = db.collection('parrots')
// 	parrots.find({
// 		age: {
// 			$gt: +baselineAge
// 		}
// 	}).toArray((err, docs) => {
// 		if (err) throw err
// 		console.log(docs)
// 		db.close()
// 	})
// })