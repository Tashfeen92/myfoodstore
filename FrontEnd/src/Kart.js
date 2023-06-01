import React from 'react'
import { LoginContext } from './Context.js/LoginContext'
import { Card, CardBody,CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import Checkout from './components/Checkout';

export default function Kart() {
  const { cartData, setCartData } = React.useContext(LoginContext)
  /* React.useEffect((item) => {
    return(<h1>{item.head}</h1>)
  }
  ,[cartData]) */
  function addition(item,head){
    for(let i = 0; i < cartData.length; i++){
       if(item === cartData[i].id && head === cartData[i].head){
        const index = cartData.indexOf(cartData[i])
        setCartData(prev => {
          let updatedArray = [...prev]
          updatedArray[index] = {...updatedArray[i], quantity: updatedArray[index].quantity + 1}
          return updatedArray
        })
      } 
    }
  }

  function minus(item,head){
    for(let i = 0; i < cartData.length; i++){
       if(item === cartData[i].id && head === cartData[i].head){
        const index = cartData.indexOf(cartData[i])
        setCartData(prev => {
          let updatedArray = [...prev]
          updatedArray[index] = {...updatedArray[i], quantity: updatedArray[index].quantity - 1}
          if(updatedArray[i].quantity === 0){
            updatedArray.splice(index,1)
          }
          return updatedArray
        })
      } 
    }
  }
  
  const projection = cartData.map((item) => {
    return (
      <Card
        style={{
          width: '150px',
          marginBottom: '50px',
          marginRight: '50px'

        }}
      >
        <img
          className="image--scaling"
          alt="Sample"
          src={item.image}
        />
        <CardBody>
          <CardTitle className='common' tag = "h4">
            {item.head}
          </CardTitle>
          <CardSubtitle
            className='common'
            tag="h5"
          >
            {item.categoryName}
          </CardSubtitle>
          <CardText 
          tag="p"
          className='common'
          style={{fontSize: "13px"}}>
            {item.disc}
          </CardText>
          <Button onClick={() => addition(item.id, item.head)}> + </Button>
            <span style={{marginLeft: "5px",marginRight: "5px" }}>{item.quantity}</span>
          <Button onClick={() => minus(item.id, item.head)}> - </Button>
          
        </CardBody>
      </Card>
    )
  })

  return (
    <div className='cart--projection'>
      {projection}
      <Checkout />
    </div>
  )
}
