const searchCryptos = async (searchQuery) => {
  try {
    const response = await fetch (`/api/v1/search/${searchQuery}`)
    if(!response.ok){
      const errorMessage = `${response.status}: (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    } else {
      const searchedCryptosData = await response.json()
      return searchedCryptosData.cryptos
    }
  } catch(err) {
    console.log(`Error in Fetch: ${err.message}`)
  }
}

export default searchCryptos