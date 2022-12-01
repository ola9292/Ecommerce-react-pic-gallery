import React from "react"

const Context = React.createContext()

function ContextProvider({children}) {

const [allPhotos, setAllPhotos] = React.useState([])
const [cartItems, setCartItems] = React.useState([])
const [order, setOrder] = React.useState('Place Order')
React.useEffect(()=>{
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
  .then((response) => response.json())
  .then((data) => {console.log(data)
    setAllPhotos(data)
});
console.log(allPhotos)
},[])

function toggleFavorite(id) {
    const updatedArr = allPhotos.map(photo => {
        if(photo.id === id) {
            console.log(id)
            console.log(!photo.isFavorite)
            return {...photo, isFavorite: !photo.isFavorite}
        }
        return photo
    })
    setAllPhotos(updatedArr)
}

function addToCart(item){
  
setCartItems(function(prevState){
    return[...prevState, item]
})
 
}
console.log(cartItems)

function removeCartItem(prod){
  let newArr =  cartItems.filter(function(item){
        return item.id !== prod.id
    })
   setCartItems(newArr)
   console.log(newArr)
}
function placeOrder(){
    setOrder('Ordering...')
   setTimeout(()=>{
    setOrder('Place Order')
        console.log('order placed')
        setCartItems([])
   },3000)
   
  
}

    return (
        <Context.Provider value={{allPhotos, order, cartItems, toggleFavorite, addToCart, removeCartItem, placeOrder}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}