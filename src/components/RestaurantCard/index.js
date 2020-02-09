import React from 'react'
import {BoxStyle} from './style/index'

export default function Restaurant({name, city, image, delivery_price, description, online}) {
  
    return (
        <BoxStyle>
            <img src={image} alt="food" />
            <h5>{name}</h5>
            <p>{description}</p>
            <h4>Price:{delivery_price/100} €</h4>
            <h6>City:{city}</h6>
            <h2>Online: {online ? `Yes` : `No`}</h2>
        </BoxStyle>
    )
}
