import React from "react"
import { Link } from "react-router-dom"

const CryptoTile = (props) => {
  return (
    <div className="callout">
      <Link to={`/cryptos/${props.id}`}>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
      </Link>
    </div>
  )
}

export default CryptoTile