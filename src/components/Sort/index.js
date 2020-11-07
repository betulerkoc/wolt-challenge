import React from 'react'
import {RestaurantContext} from '../../context/restaurant'
import {SelectForm} from './style/index'

export default function Sort() {

    const {handleChange, selectValue} = React.useContext(RestaurantContext);
    
    return (
     <SelectForm>
       <label>Select Sort Option </label>
        <select name="sorting" onChange={handleChange} value = {selectValue}>
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
        </select>
      </SelectForm> 
    )
}





