import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Info=styled.div` 
opacity:0 ;
width:100% ;
height:100% ;
top:0 ;
left:0 ;
position:absolute ;
background-color:rgba(0,0,0,0.2) ;
z-index:3 ;
display:flex ;
align-items:center ;
justify-content:center ;
transition: all 0.5s ease;
  cursor: pointer;
`
const Container =styled.div` 
flex:1 ;
height:350px ;
min-width:280px ;
margin:5px ;
display:flex ;
align-items:center ;
justify-content:center ;
background-color:#f5fbfd ;
position:relative;
&:hover ${Info}{
    opacity: 1;
  }
`
const Circle=styled.div` 
width:200px ;
height:200px ;
background-color:white ;
border-radius:50% ;
position:absolute ;

`
const Image=styled.img` 
height:75%;
z-index:2 ;
`

const Icon =styled.div` 
width:40px ;
height:40px ;
border-radius:50% ;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover {
    background-color: #e9f5f5;
    transform: scale(1.5);
  }
`
function Product({item}) {
  return (
    <Container>
   <Circle>

   </Circle>
    <Image src={item.img}>

    </Image>
    <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
        <Link to={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product