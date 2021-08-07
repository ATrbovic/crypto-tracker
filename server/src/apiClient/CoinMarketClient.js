import got from "got";

const coinMarketApiKey = "";

class CoinMarketApiKey {
  static async getCrypto(Bitcoin) {
    try {
      const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?q=${Bitcoin}&appid=${coinMarketApiKey}`;
      const apiResponse = await got(url);
      const responseBody = apiResponse.body;
      return responseBody;
    } catch (error) {
      return { error: error.message }
    }
  }
}



export default CoinMarketApiKey
