import React from 'react'
import styled from 'styled-components'
const Container =styled.div`
height:30px ;
background-color:teal ;
color:white ;
display:flex ;
align-items:center ;
justify-content:center ;
font-size: 14px;
font-weight:500 ;

margin:0 ;
`
function Announcement() {
  return (
    <Container>
        Super Deal! Free Shipping on order above $50    
    </Container>
  )
}

export default Announcement