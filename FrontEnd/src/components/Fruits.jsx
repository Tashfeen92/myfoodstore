import React from "react"
import { useParams } from "react-router-dom";
import { fruitsInfo } from './subFiles/Data';
import { LoginContext } from '../Context.js/LoginContext';

const Fruits = () => {
    const {cartData, setCartData} = React.useContext(LoginContext)
    const params = useParams();
    let fruit = "";
    function findFruit() {
        fruitsInfo.forEach(itemFruit => {
            // eslint-disable-next-line
            if (itemFruit.id == params.id) {
                fruit = itemFruit;
            }
        })
    }
    findFruit();

    function check(veggie,head){
        console.log(veggie,head)
        if(cartData.length === 0){
            setCartData(prev => {
                let updatedCart = [...prev]
                updatedCart.push(fruit)
                return updatedCart
            })
        } //End the first if check
        if(cartData.length > 0){
            let flag = false;
            for(let i = 0; i < cartData.length; i++){
                if(cartData[i].head === head){
                    flag = true;
                    setCartData(prev => {
                        let heavyCart = [...prev]
                        heavyCart[i] = {...heavyCart[i], quantity: heavyCart[i].quantity + 1}
                        return heavyCart
                    })
                    break;
                }
            }
            if(flag === true){
                console.log("item already added")
            }
            else{
                setCartData(prev => {
                    let newCart = [...prev]
                    newCart.push(fruit)
                    return newCart
                })
            }

        }    
    }

    return (
        <div className='fpDiv'>
            <img className="fpImg" src={fruit.image} alt="Potato" />
            <p className="fpPrice">Rs. {fruit.price}</p>
            <h3 className="fpHead">{fruit.head}</h3>
            <p className="fpDisc">{fruit.disc}</p>
            <hr className="e2" />
            <h3 className="fpVariation">Select Variation</h3>
            <label for="options1">
                <input type="radio" className="fpQuantity1" name="options" value="options1" />
                {fruit.quantity * 0.5} {fruit.priceTag}
            </label>
            <span className="fpPrice1">Rs. {fruit.price * 0.5}</span>
            <br />
            <label for="options2">
                <input type="radio" className="fpQuantity2" name="options" value="options2" />
                {fruit.quantity} {fruit.priceTag}
            </label>
            <span className="fpPrice2">Rs. {fruit.price * 1}</span>
            <br />
            <label for="options3">
                <input type="radio" className="fpQuantity3" name="options" value="options3" />
                {fruit.quantity * 2} {fruit.priceTag}
            </label>
            <span className="fpPrice3">Rs. {fruit.price * 2}</span>
            <br />
            <label for="options4">
                <input type="radio" className="fpQuantity4" name="options" value="options4" />
                {fruit.quantity * 3} {fruit.priceTag}
            </label>
            <span className="fpPrice4">Rs. {fruit.price * 3}</span>
            <br />
            <label for="options5">
                <input type="radio" className="fpQuantity5" name="options" value="options5" />
                {fruit.quantity * 5} {fruit.priceTag}
            </label>
            <span className="fpPrice5">Rs. {fruit.price * 5}</span>
            <button onClick={() => check(fruit.id,fruit.head)} className="fpAdd">Add to Cart</button>
        </div>
    )
}
export default Fruits;