const fs = require("fs");
const path = require("path");

const p = path.join(
        path.dirname(process.mainModule.filename),
        "data",
        "products.json"
        );

  const getProductsFromFile = (cb) => {
        fs.readFile(p, (err, fileContent) => {
            if(err) {
            return cb([]);
            } else {
            cb(JSON.parse(fileContent));
            }
        });
    }

module.exports = class Order {
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
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
            console.log(err);
        });
        });
    }
}