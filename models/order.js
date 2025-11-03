const getDb = require("../util/database").getDb;


class Order {
    constructor(amount, type, email, phone, name, address, notes)   {
        this.amount = amount;
        this.type = type;
        this.email = email;
        this.phone = phone;
        this.name = name; 
        this.address = address;
        this.notes = notes;
    }

    save()  {
      const db = getDb();
      return db.collection("0").insertOne(this).then(result => {
        console.log(result);
      }).catch(err => {
        console.log(err);
      });
    }
}

module.exports = Order;