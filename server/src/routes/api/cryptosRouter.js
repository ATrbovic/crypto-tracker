import express from "express"
import objection from "objection"
const { ValidationError } = objection
import { Crytpo } from "../../../models/index.js"
import CryptoSerialzier from "../../../serializers/CryptoSerializer.js"
import CryptoSerializer from "../../serializers/CryptoSerializer.js"


const cryptosRouter = new express.Router()

// cryptosRouter.use()

cryptosRouter.get("/", async (req,res) => {
  try {
    const cryptos = await Crypto.query()
    const serializedCryptos = await Promise.all(
      cryptos.map(async (crypto) => {
        return await CryptoSerializer.getSummary(crypto)
      })
    )
    return res.status(200).json({ cryptos: serializedCryptos })
  } catch(error) {
    return res.status(500).json({ error })
  }
})

cryptosRouter.post("/", async (req, res) => {
  const body = req.body
  const formInput = cleanUserInput(body)
  try {
    const newCrypto = await Crypto.query().insertAndFetch(formInput)
    return res.status(200).json({ crypto: newCrypto })
  }
  catch(error) {
    if(error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ error })
  }
})

export default cryptosRouter