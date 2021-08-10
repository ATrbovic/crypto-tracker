import { Crypto } from "../../models/index.js"

class CryptoSeeder {
  static async seed() {
    const crypotData = [
      {
        name: "Bitcoin",
        price: "$46,000"
      },
      {
        name: "Ethereum",
        price: "$3,125"
      },
      {
        name: "Doge",
        price: "$1,000,000"
      }
    ]

    for (const singleCryptoData of crypotData) {
      const currentCrypto = await Crypto.query().findOne(singleCryptoData)
      if (!currentCrypto) {
        await Crypto.query().insert(singleCryptoData)
      }
    }
  }
}

export default CryptoSeeder