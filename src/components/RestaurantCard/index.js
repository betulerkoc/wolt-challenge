import React from 'react'
import {BoxStyle} from './style/index'
import PropTypes from 'prop-types'

export default function Restaurant({name, city, image, delivery_price, description, online}) {
  
    return (
        <BoxStyle>
            <img src={image} alt="food" />
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>Price:{delivery_price/100} €</h4>
            <h6>City:{city}</h6>
            <h3>Online: {online ? `Yes` : `No`}</h3>
        </BoxStyle>
    )
}

Restaurant.propTypes = {
    name:PropTypes.string,
    city:PropTypes.string,
    image:PropTypes.string,
    delivery_price:PropTypes.number,
    online:PropTypes.bool
}

Restaurant.defaultProps = {
    name:"Unknown Name",
    city:"Unknown City",
    image:"https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90",
    delivery_price: 0,
    online:false
}