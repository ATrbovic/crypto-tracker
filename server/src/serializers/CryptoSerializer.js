class CryptoSerializer {
  static async getSummary(crypto) {
    const allowedAttributes = ["name", "price", "id"]

    let serializedCrypto = {}
    allowedAttributes.forEach(attribute => {
      serializedCrypto[attribute] = crypto[attribute]
    })

    return serializedCrypto
  }
}

export default CryptoSerializer