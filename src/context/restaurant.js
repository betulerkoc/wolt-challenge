import React from 'react'
import items from '../data'

const RestaurantContext = React.createContext();


function RestaurantProvider({children}) {

    const[restaurant, setRestaurant] = React.useState([]);
    const[selectValue, setSelectValue] = React.useState("");

    const getRestaurant = () => {
        let datas = [];
        if(items) {
            datas = items;
            if(selectValue === 'za') {
                datas.sort((a, b) => (a.name > b.name) ? 1 : -1 )
            }
            if(selectValue === 'az') {
                datas.sort((a, b) => (a.name > b.name) ? -1 : 1 )
            }
            setRestaurant(datas);
            //console.log(datas);
        }
    }   

    React.useEffect(() => {
        getRestaurant();
    }, []);

    const handleChange = (e) => {
        //console.log(e.target.value)
        setSelectValue(e.target.value);
        getRestaurant();
    }

    return (
        <RestaurantContext.Provider value={{restaurant, selectValue, handleChange}}>
            {children}
        </RestaurantContext.Provider>
    )
}

const RestaurantConsumer = RestaurantContext.Consumer;

export{RestaurantProvider, RestaurantConsumer, RestaurantContext}