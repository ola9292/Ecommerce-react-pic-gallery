import React,{ useState, useContext } from "react"
import { Context } from "../Context"
import PropTypes from 'prop-types'



function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const { toggleFavorite, addToCart, cartItems, removeCartItem } = useContext(Context)

    function handleMouseOver(){
       setHovered(true)
    }
    function handleMouseOut(){
        setHovered(false)
    }
    function toggleIcon(){
        if(img.isFavorite){
            return  <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        }else if(hovered){
            return <i className="ri-heart-line favorite" onClick={()=>{toggleFavorite(img.id)}}></i>
        }
    }
    function toggleCart(){
       const found = cartItems.some(function(item){
        return img.id === item.id
       })
        if(found){
           return <i className="ri-shopping-cart-fill cart" onClick={()=>{removeCartItem(img)}}></i>
        }else if(hovered){
            return <i className="ri-add-circle-line cart" onClick={()=>{addToCart(img)}}></i>
        }
    }
        return (
        <div className={`${className} image-container`} 
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}>
            <img src={img.url} className="image-grid" />
          
            {toggleIcon()}
            {toggleCart()}
           
        </div>
    )
}
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
  }
 
export default Image
