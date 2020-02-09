import React from 'react'
import {RestaurantContext} from '../../context/restaurant'
import {SelectForm} from './style/index'

export default function Sort() {

    const {handleChange, selectValue} = React.useContext(RestaurantContext);
    
    return (
     <SelectForm>
        <select name="sorting" onChange={handleChange} value = {selectValue}>
            <option value="">Select your option</option>
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
        </select>
      </SelectForm> 
    )
}





