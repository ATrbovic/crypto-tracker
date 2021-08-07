import express from "express"

import CoinMarketClient from "../../../src/apiClient/CoinMarketClient.js"

const cryptoRouter = new express.Router()

cryptoRouter.get("/", async (req, res) => {
  const Bitcoin = req.query.Bitcoin

  try{
    const cryptoResponse = await CoinMarketClient.getCryptos(Bitcoin)
    const cryptoData = JSON.parse(cryptoResponse)
    return res
      .set({ "Content-Type": "application/json" })
      .status(200)
      .json(cryptoData)
  } catch (erro) {
    return res.status(401).json({ errors: error })
  }
})

export default cryptoRouter
