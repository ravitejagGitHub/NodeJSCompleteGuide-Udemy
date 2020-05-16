const fs = require('fs')
const path = require('path');
const Cart = require('./cart');
const mongodb = require('mongodb');

const getDb = require('../utils/database').getDB;

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price, id) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    let dbOper;
    if (this._id) {
      dbOper = db.collection('products')
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOper = db.collection('products').insertOne(this);
    }
    return dbOper.then(result => {
    //  console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }
  static deleteById(id) {
    const db = getDb();
    return db.collection('products').deleteOne(
      { _id: new mongodb.ObjectId(id) }
    ).catch(err => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('products').find().toArray().then(products => {
      // console.log(products);
      return products;
    }).catch(err => console.log(err));
  }

  static findById(id) {
    const db = getDb();
    return db.collection('products').find({
      _id: mongodb.ObjectId(id)
    }).next().then(product => {
      //  console.log(product);
      return product;
    }).catch(err => console.log(err));
  }
};
