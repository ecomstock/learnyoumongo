//learnyoumongo 5
let mongo = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/learnyoumongo'
let firstName = process.argv[2]
let lastName = process.argv[3]
let doc = {
	firstName: firstName,
	lastName: lastName
}

mongo.connect(url, (err, db) => {
	if (err) throw err
	let docs = db.collection('docs')
	docs.insert(doc, (err, data) => {
		if (err) throw err
		console.log(JSON.stringify(doc))
		db.close()
	})
})


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