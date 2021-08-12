import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CryptoTile from "./CryptoTile.js"
import searchCryptos from "../services/searchCryptos.js"

const CryptosList = (props) => {
  const [Cryptos, setCryptos] = useState([])

  const fetchCryptos = async () => {
    try {
      const response = await fetch("/api/v1/cryptos")
      if(!response.ok){
        const errorMessge = `${response.status}: (${response.statusText})`
        const error = new Error(errorMessge)
        throw(error)
      } else {
        const cryptosData = await response.json()
        setCryptos(cryptosData.Cryptos)
      }
    } catch(err) {
      console.log(`Error in Fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchCryptos()
  }, [])

  let cryptoList = searchedCrypto.map( crypto => {
    return(
      <CryptoTile
        key={crypto.id}
        id={crypto.id}
        name={crypto.name}
        price={crypto.price}
      />
    )
  })

  if(cryptoList.length === 0) {
    cryptoList = (
      <div className="search_error">
        <p>No Matching results found!</p>
      </div>
    )
  }

  const handleChange = (event) => {
    setSearchData(event.currentTarget.value)
  }

  const handleSearch = async (searchData) => {
    const searchResults = await searchCryptos(searchData)
    setSearchedCryptos(searchResults)
  }

  useEffect(() => {
    handleSearch(searchResults)
  }, [searchData])

  
  return (
    <div className="callout primary">
      <h1>Cryptos</h1>
      <label htmlFor="search">search:</label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchData}
        onChange={handleChange}
      ></input>
    </div>
  )
}

export default CryptosList