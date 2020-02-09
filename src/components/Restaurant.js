import React from 'react'

export default function Restaurant({name, city}) {
    return (
        <div>
            <h4>name: {name}</h4>
            <h4>city: {city}</h4>
            <hr/>
        </div>
    )
}
