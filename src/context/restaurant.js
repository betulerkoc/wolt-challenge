import React from 'react'
import items from '../data'

const RestauranContext = React.createContext();


function RestaurantProvider({children}) {

    const[restaurant, setRestaurant] = React.useState([]);

    const getRestaurant = () => {
        let datas = [];
        if(items) {
            datas = items;
        }
        setRestaurant(datas);
    }
    
    React.useEffect(() => {
        getRestaurant();
    }, []);


    console.log(items)


    return (
        <RestauranContext.Provider value={{restaurant}}>
            {children}
        </RestauranContext.Provider>
    )
}

const RestaurantConsumer = RestauranContext.Consumer;

export{RestaurantProvider, RestaurantConsumer, RestauranContext}