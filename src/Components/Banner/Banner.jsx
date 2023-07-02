import { Box, Typography,useMediaQuery } from '@mui/material'
import React from 'react'
import hero from '../../assets/hero.png'
import leaf from '../../assets/leaf.png'
import leafbg from '../../assets/leafbg.png'
import CustomButton from '../Button/Button'
import {ShoppingCart}from '@mui/icons-material' 

const Banner = () => {
    const isMobile=useMediaQuery("(max-width:768px)")
    const isTablet=useMediaQuery("(min-width:769px) and (max-width:1180px)")
   
  return (
    <Box component={"main"} px={isMobile?"20px":isTablet?"30px":"80px" } pt={"50px"} sx={{position:"relative"}}>
           <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          backgroundColor: "#f8f6f3",
          backgroundImage: `url(${leafbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "28% auto",
          backgroundPosition: "bottom right",
          opacity: "0.25",
          mixBlendMode: "multiply",
          transition: " background .3s,border-radius .3s,opacity .3s",
        }}
        className="overlay"
      ></div>
        <Box display={"flex"} gap={isTablet ? "20px": "30px"} alignItems={"center"} flexDirection={isMobile?"column":"row"} >
            <Box width={isMobile?"100%":"50%"} order={isMobile?"2":"0"}> 
                <img style={{height:"100%" ,width:"100%"}}src={hero} alt="ProductImage"/>
            </Box>
            <Box width={isMobile?"100%":"50%"} order={isMobile?"1":"0"} alignItems={isMobile?"center":"flex-start"} display={"flex"}  flexDirection={"column"}gap={"20px"} pl={isMobile ?"0px":isTablet ? "30px" :"80px"}>
            <img style={{width:"75px",height:"33px"}}  src={leaf} alt="LeafImage"/>  
            <Typography variant="h5" >Best Quality Products</Typography>
            <Typography variant="h1" sx={{fontSize:`${isMobile?"30px" :isTablet? "40px" : "52px"}`}}>Join The Organic Movement!</Typography> 
            <Typography variant="subtitle1" sx={{textAlign:`${isMobile ?"center" :"left"}`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>   
            <CustomButton text={"Shop Now"} icon={<ShoppingCart/>}/>
           </Box>
            
        </Box>
    </Box>
  )
}

export default Banner