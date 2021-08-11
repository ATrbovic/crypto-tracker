import express from "express"

import CoinMarketClient from "../../../apiClient/CoinMarketClient.js"

const ApiRouter = new express.Router()

ApiRouter.get("/", async (req, res) => {
  // const  cryptoName = req.query.cryptoName 
  console.log("at crypto router")
  try {
    const cryptoResponse = await CoinMarketClient.getCryptos()
    const cryptoData = JSON.parse(cryptoResponse)
    console.log(cryptoResoinse)
    return res
      .set({ "Content-Type": "application/json" })
      .status(200)
      .json(cryptoData)
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default ApiRouter