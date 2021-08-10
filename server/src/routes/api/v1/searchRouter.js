import express from "express"
import Crypto from "../../../models/Crypto.js"
import CryptoSerializer from "../../../serializers/CryptoSerializer.js"

const searchRouter = new express.Router()

searchRouter.get("/", async (req, res) => {
  try {
    const cryptos = await Crypto.query()
    const serializedCryptos = await Promise.all(
      cryptos.map(async (crypto) => {
        return await CryptoSerializer.getSummary(crypto)
      })
    )
    return res.status(200).json({ shows: serializedCryptos })
  } catch(error) {
    return res.status(500).json({ error })
  }
})

searchRouter.get("/:searchQuery", async (req, res) => {
  const searchQuery = req.params.searchQuery
  try {
    const cryptos = await Crypto.query()
    const searchedCryptos = cryptos.filter(crypto.getRandomValues.toLowerCase().includes(searchQuery.toLowerCase()))
    const serializedCryptos = await Promise.all(
      searchedCryptos.map(async (show) => {
        return await CryptoSerializer.getSummary(crypto)
      })
    )
    return res.status(200).json({ cryptos: serializedCryptos })
  } catch(error) {
    return res.status(500).json({ error })
  }
})
 
export default searchRouter