import React from "react";
import { vegetablesInfo, fruitsInfo } from "./subFiles/Data";
import { pagesInfo } from "./subFiles/Data";
import { useParams } from "react-router-dom";
import "./subFiles/Style.css";
import { useNavigate } from "react-router-dom";

const FreshProduce = () => {

    const param = useParams();
    let page = "";
    function findPage() {
        pagesInfo.forEach(itemPage => {
            if (itemPage.categoryName === param.categoryName) {
                page = itemPage;
            }
        })
    }
    findPage();

    let navigate = useNavigate();
    function handleClick(vegetable) {
        navigate("/" + vegetable.categoryName + "/v/" + vegetable.id)
    }
    function handleClicks(fruit) {
        navigate("/" + fruit.categoryName + "/f/" + fruit.id)
    }
    const match = param.categoryName;

    return (
        <div className="fpFullPage">
            <div>
                <div className="Cart">
                    <h3 className="CartHead">Your Cart</h3>
                    <p className="CartDisc">Start adding items to your cart</p>
                    <hr />
                    <span className="Cartstp">To be Calculated</span>
                    <p className="Cartst">Subtotal</p>
                    <span className="Cartdf">Rs. 99</span>
                    <p className="Cartd">Delivery Fee</p>
                    <span className="Carttp">To be Calculated</span>
                    <p className="Cartt">
                        Total<span className="tSpan">(incl. GST)</span>
                    </p>
                    <button className="checkBtn">Go to Checkout</button>
                </div>
            </div>
            <div className="freshProduce">
                <img
                    className="freshProduceImg"
                    src={page.freshProduceImg}
                    alt="Fresh Produce"
                />
                <div className="star"></div>
                <h2 className="freshProduceHead">Smart Food Store - {page.categoryName}</h2>
                <div>
                    <pre className="category">
                        <span className="categoryDollar">$</span> - {page.categoryNamed}
                    </pre>
                    <img
                        className="fire"
                        src="https://www.freeiconspng.com/uploads/fire-vector-icon-png-27.png"
                        alt="Fire"
                    />
                    <h3 className="Popular">{page.type1}</h3>
                    <div>
                        {vegetablesInfo.map((vegetable, index) => {
                            if (match === vegetable.categoryName
                            ) {
                                return (
                                    <>
                                        <div className="productDiv" key={index} onClick={() => { handleClick(vegetable, index) }}>
                                            <img className="productImg" src={vegetable.image} alt="Potato" />
                                            <h4 className="productHead">{vegetable.head}</h4>
                                            <p className="productDisc">{vegetable.disc}</p>
                                            <p className="productPrice">Rs. {vegetable.prices}</p>
                                        </div>
                                    </>
                                );
                            }
                            else {
                                return <></>
                            }
                        })}
                    </div>
                </div>
                <hr className="e" />
                <div>
                    <img
                        className="fire"
                        src="https://www.freeiconspng.com/uploads/fire-vector-icon-png-27.png"
                        alt="Fire"
                    />
                    <h3 className="Popular">{page.type2}</h3>
                    <div>
                        {fruitsInfo.map((fruit, index) => {
                            if (match === fruit.categoryName
                            ) {
                                return (
                                    <>
                                        <div className="productDiv" key={index} onClick={() => { handleClicks(fruit, index) }}>
                                            <img className="productImg" src={fruit.image} alt="Mango" />
                                            <h4 className="productHead">{fruit.head}</h4>
                                            <p className="productDisc">{fruit.disc}</p>
                                            <p className="productPrice">Rs. {fruit.prices}</p>
                                        </div>
                                    </>
                                );
                            }
                            else {
                                return <></>
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FreshProduce;