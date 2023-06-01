import React from 'react'
import { pagesInfo } from "./components/subFiles/Data";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

    let navigate = useNavigate();
    function handleClicked(pages) {
        navigate("/" + pages.categoryName)
    }

    return (
        <div>
            <div className="backgroundimage">
            </div>
            <div className="categoryinput">
                {pagesInfo.map((pages, index) => {
                    return (
                        <div className="productcategory" key={index} onClick={() => { handleClicked(pages) }}>
                            <img className="Ok" src={pages.freshProduceImg} alt="Fresh" />
                            <p className="disc">{pages.disc}</p>
                        </div>
                    )
                })}
            </div>
            <footer className="footer1">
                <div className="leftFooter">
                    <h3>Smart Foods</h3>
                    <p>Copyright &copy; <strong>SmartFoods</strong> All rights reserved</p>
                </div>
                <div className="midFooter">
                    <p><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;&nbsp;Lahore, Pakistan</p>
                    <p><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;&nbsp;+92-344-4213020</p>
                    <p><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;&nbsp;SmartFoods@gmail.com</p>
                </div>
                <div className="rightFooter">
                    <h4>About the Company</h4>
                    <p>Smart Foods is an online platform which gives you different varities of household food with an efficient delivery time. This company does not compromise on the quality of a product and so is the most reliable choice.</p>
                </div>

            </footer>
        </div>
    )
}

export default Home