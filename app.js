//learnyoumongo 9
let mongo = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/learnyoumongo'
let mysterySize = process.argv[2]

mongo.connect(url, (err, db) => {
	if (err) throw err
	let prices = db.collection('prices')
	prices.aggregate([
		{ $match: { size: mysterySize } },
		{ $group: {
			_id: 'average',
			average: {
				$avg: '$price'
			}
		}}
	]).toArray((err, results) => {
		if (err) throw err
		var o = results[0]
		console.log(Number(o.average).toFixed(2))
		db.close()
	})
})

// //learnyoumongo 8
// let mongo = require('mongodb').MongoClient
// let url = 'mongodb://localhost:27017/learnyoumongo'
// let baselineAge = process.argv[2]

// mongo.connect(url, (err, db) => {
// 	if (err) throw err
// 	let parrots = db.collection('parrots')
// 	parrots.count({
// 		age: {
// 			$gt: +baselineAge
// 		}
// 	}, (err, count) => {
// 		if (err) throw err
// 		console.log(count)
// 		db.close()
// 	})
// })

// //learnyoumongo 7
// let mongo = require('mongodb').MongoClient
// let url = 'mongodb://localhost:27017/' + process.argv[2]

// mongo.connect(url, (err, db) => {
// 	if (err) throw err
// 	let collection = db.collection(process.argv[3])
// 	collection.remove({
// 		_id: process.argv[4]
// 	}, (err) => {
// 		if (err) throw err
// 		db.close()
// 	})
// })

// //learnyoumongo 6
// let mongo = require('mongodb').MongoClient
// let url = 'mongodb://localhost:27017/' + process.argv[2]


// mongo.connect(url, (err, db) => {
// 	if (err) throw err
// 	let users = db.collection('users')
// 	users.update({
// 		username: 'tinatime'
// 	}, {
// 		$set: {
// 			age: 40
// 		}
// 	}, (err) => {
// 		if (err) throw err
// 		db.close()
// 	})
// })

// //learnyoumongo 5
// let mongo = require('mongodb').MongoClient
// let url = 'mongodb://localhost:27017/learnyoumongo'
// let firstName = process.argv[2]
// let lastName = process.argv[3]
// let doc = {
// 	firstName: firstName,
// 	lastName: lastName
// }

// mongo.connect(url, (err, db) => {
// 	if (err) throw err
// 	let docs = db.collection('docs')
// 	docs.insert(doc, (err, data) => {
// 		if (err) throw err
// 		console.log(JSON.stringify(doc))
// 		db.close()
// 	})
// })

// //learnyoumongo 4
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
// 	}, {
// 		name: 1,
// 		age: 1,
// 		_id: 0
// 	}).toArray((err, docs) => {
// 		if (err) throw err
// 		console.log(docs)
// 		db.close() 
// 	})
// })

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