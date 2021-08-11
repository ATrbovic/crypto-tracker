import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import ErrorList from "./Errorlist.js"
import translateServerErrors from "../services/translateServerErrors.js"

const NewCryptoForm = (props) => {
  const [newCrypto, setNewCrypto] = useState({
    name: "",
    price: ""
  })

  const [shouldRedirect, setShouldRedirect] = useState(false)

  const [errors, setErrors] = useState([])

  const handleInputChange = (event) => {
    setNewCrypto({
      ...newCrypto,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("/api/v1/cryptocurrencies", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newCrypto)
      })
      if(!response.ok) {
        if(response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status}: (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
      } else {
        setShouldRedirect(true)
      }
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  if(shouldRedirect) {
    return <Redirect push to="/cryptocurrencies" />
  }

  return (
    <div>
      <h1> Add a new Crypto</h1>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit} className="callout">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newCrypto.name}
          onChange={handleInputChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="integer"
          id="price"
          name="price"
          value={newCrypto.price}
          onChange={handleInputChange}
        />

        <input
          type="submit"
          value="Add Crypto"
        />
      </form>
    </div>
  )
}

export default NewCryptoForm