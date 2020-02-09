import React from 'react'
import Restaurant from './Restaurant'
import { RestauranContext } from '../context/restaurant'

export default function RestaurantList() {
    const {restaurant} = React.useContext(RestauranContext);

    console.log(restaurant)
    return (
        <div>
            {restaurant.map(item => {
                return <Restaurant key = {item.image} {...item}/>
            }) }
        </div>
    )
}
