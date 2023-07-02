import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import CustomButton from '../Button/Button';
import { Height } from '@mui/icons-material';

const RecommendationCard = ({content}) => {
  const isTablet= useMediaQuery("(max-width:1299px)");
  return (
    <Box width={"100%"} sx={{backgroundColor:"rgb(238,238,238)"}}>
    
    <Box width={"100%"}  sx={{backgroundColor:"white"}} >
  

         <Box p={4} boxShadow={"0 0 10px 0 rgb(17 24 29 / 17%)" } borderRadius={"10px"}>
        <Box display={"flex"} flexDirection={"column"} gap={"2px"} sx={{ backgroundImage: `url(${content.bgimage})` , height:"300px" ,width:"100%" ,backgroundPosition:"bottom-right",backgroundRepeat:"no-repeat", backgroundSize:"contain",opacity:"1"}}>
        
            <Typography pt={3} variant='h3'>{content.title}</Typography>
            <Typography pt={3}> {content.desc}</Typography>
            <Box pt={3}>
              <CustomButton text={"Shop Now"}/>
            </Box>
            </Box>
            </Box>
          </Box>
         </Box>
       
)};

export default RecommendationCard;
