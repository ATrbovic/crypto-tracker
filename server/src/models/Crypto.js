const Model = require("./Model.js");

class Crypto extends Model {
  static get tableName() {
    return "cryptos"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "price"],
      properties: {
        name: { type: "string", minLength: 1, maxLength: 255 },
        price: { type: "integer", minLength: 1, maxLength: 255 }
      }
    }
  }
}

module.exports = Crypto