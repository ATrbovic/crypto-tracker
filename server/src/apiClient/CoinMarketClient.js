import got from "got";

const CoinMarketApiKey = "";

class CoinMarketClient {
  static async getCryptos() {
    try{
      console.log("about to make request")
      const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?api_key="1234"`
      const apiResponse = await got(url);
      console.log(apiResponse)
      console.log("Post request")
      const responseBody = apiResponse.body;
      console.log(responseBody)
      return responseBody;
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default CoinMarketClient