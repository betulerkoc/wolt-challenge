import React from 'react'
import Restaurant from '../RestaurantCard/index'
import { RestauranContext } from '../../context/restaurant'
import {ListStyle} from './style/index'

export default function RestaurantList() {
    const {restaurant} = React.useContext(RestauranContext);

    return (
        <ListStyle>
            {restaurant.map(item => {
                return <Restaurant key = {item.image} {...item}/>
            }) }
        </ListStyle>
    )
}
