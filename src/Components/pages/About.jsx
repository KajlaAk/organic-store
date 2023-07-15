import { Box, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import logoleaftop from "../../assets/logoleaftop.png"
import aboutimg from "../../assets/aboutlogo.jpg"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import img1 from "../../assets/sliderimg1.jpg"
import img2 from "../../assets/sliderimg2.jpg"
import img3 from "../../assets/sliderimg3.jpg"
import img4 from "../../assets/sliderimg4.jpg"
import certified from "../../assets/certified.png"
import aboutleaflogo from "../../assets/aboutleaflogo.png"
import {AiOutlineCheckCircle} from "react-icons/ai"
import CustomButton from '../Button/Button'
import {ShoppingCart}from '@mui/icons-material' 
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css';
import Rating from '../Rating'




const images=[
  img1, img2 , img3 ,img4
]

const About = () => {
  const isTablet= useMediaQuery("(max-width:1025px)")
  const isMobile= useMediaQuery("(max-width:767px)")

  const [counterOn,setCounterOn]=useState('false');
  return (
    <Box>
        <Box>
            <Typography variant='h1' p={5} sx={{textAlign:"center" ,backgroundColor:"#f8f6f3"}}>About Us</Typography>
        </Box>
        
        {/* -----Next-Section---- */}

        <Box sx={{ marginBottom: "48px" }}>
        <Box sx={{ maxWidth: "600px", mx: "auto", textAlign: "center" }}>
          <img style={{ height: "70px", marginTop:"-25px" }} src={logoleaftop} alt="" />
        </Box>
      </Box>
       
       {/* -----Next-Section---- */}

      <Box display={isMobile?"grid" :"flex"} sx={{maxWidth:"1200px"}} ml={"auto"} mr={"auto"} position={"relative"} p={"40px"} >
        <Box > 
            <Typography variant={isTablet?"h3" :"h2"} pt={"80px"}> We Are Your Favourite Store.</Typography>
           <p style={{paddingTop:"20px"}}> Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.

            </p> <p style={{paddingTop:isTablet?"2px":"20px"}}> Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.</p>
        </Box>
        <Box textAlign={"center"}>
            <img style={{maxWidth:isMobile ?"350px":isTablet?"400px" :"500px" , padding:isMobile?"80px":isTablet?"69px" :"50px" }} src={aboutimg}/>
        </Box>
      </Box>

             {/* -----Next-Section---- */}
             <Box   sx={{backgroundColor:"#001524",color:"white", padding:"30px 0" }}>
                <Box display={isMobile?"grid":"flex"} sx={{marginLeft:"40px", marginRight:"40px" ,columnGap:isTablet?"40px":"100px"}} position={"relative"} >
                <Box><Typography variant={isMobile?"h4":isTablet?"h6":"h4"} sx={{color:"white",textAlign:"center", padding:"5px"}}>Numbers Speak For Themselves!</Typography></Box>
                <Box>
                <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>(false)}> {counterOn && <Typography variant='h2' textAlign={"center"}> <CountUp start={0} end={5000} duration={2} delay={0}/>+ <Typography textAlign={"center"}>Curated Products</Typography></Typography>}</ScrollTrigger> 
                </Box>
                <Box><Box>
                <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>(false)}> {counterOn && <Typography variant='h2' textAlign={"center"}> <CountUp start={0} end={800} duration={2} delay={0}/>+ <Typography textAlign={"center"}>Curated Products</Typography></Typography>}</ScrollTrigger> 
                </Box></Box>
                <Box><Box>
                <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>(false)}> {counterOn && <Typography variant='h2' textAlign={"center"}> <CountUp start={0} end={40} duration={2} delay={0}/>+ <Typography textAlign={"center"}>Product Categories</Typography></Typography>}</ScrollTrigger> 
                </Box></Box>
                </Box>
             </Box>
                      {/* -----Next-Section---- */}

                            <Box>
                              <Box maxWidth={"1200px"} ml={"auto"} mr={"auto"}display={isTablet?"grid":"flex"}>
                                <Box width={isMobile?"400px":isTablet?"800px":"600px"} padding={isMobile?"40px":isTablet?"100px":"40px"}>
                                  <Box p={2}sx={{backgroundColor:"rgb(238,238,238)"}}  >
                                    <Box marginBottom={"30px"} >
                                      <Box>
                                      <AwesomeSlider  > 
                                 {images.map((image, index) => (
                                  <div key={index} data-src={image}  />
                                  ))}
                                  </AwesomeSlider>

                                      </Box>
                                      <Box>        
                                        <Typography padding={"35px"} textAlign={"center"} variant='subtitle1'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
                                        <Box textAlign={"center"} padding={1}>
                                       <Rating value={4}/> 
                                       </Box> 
                                      </Box> 
                                      
                                    </Box>
                                  </Box>
                                </Box>
                                <Box width={isTablet?"auto":"600px"}><Box display={isTablet?"grid":"flex"}gap={"10px"} padding={isTablet?"5px":"40px"}>
                            <Box textAlign={"center"}>   
                               <img style={{width:"116px", height:"90px"}} src={certified}/>  
                            </Box>
                            <Box textAlign={"center"}>
                              <Typography variant='h3'>Certified Products</Typography>
                              <p>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
                            </Box>
                           </Box>
                              <Box textAlign={"center"}>
                                 <Typography variant={isMobile?"h5":isTablet?"h3":"h2"} p={"32px"}>We Deal With Various Quality Organic Products!</Typography>
                                 <img style={{paddingTop:"25px"}} src={aboutleaflogo}/>
                              </Box>
                              <Box  display={"flex"}  gap={"30px"} lineHeight={"30px"} padding={"20px"}>
                                 <Box >
                                  <ol>
                                    <li style={{listStyleType:"none"}}><AiOutlineCheckCircle color='#8bc34a'/>Fresh fruits</li>
                                    <li style={{listStyleType:"none"}}><AiOutlineCheckCircle color='#8bc34a'/>Dry fruits</li>
                                    <li style={{listStyleType:"none"}}><AiOutlineCheckCircle color='#8bc34a'/>Fresh Vegitables</li>
                                    <li style={{listStyleType:"none"}}><AiOutlineCheckCircle color='#8bc34a'/>Dried Vegitable</li>
                                    <li style={{listStyleType:"none"}}><AiOutlineCheckCircle color='#8bc34a'/>Dried Vegitable</li>

                                  </ol>
                                 </Box>
                                 <Box >
                                 <ol>
                                    <li style={{listStyleType:"none"}}><AiOutlineCheckCircle color='#8bc34a'/>Beauty Products</li>
                                    <li style={{listStyleType:"none"}}><AiOutlineCheckCircle color='#8bc34a'/>Milk Products</li>
                                    <li style={{listStyleType:"none"}}><AiOutlineCheckCircle color='#8bc34a'/>Organic Honey</li>
                                    <li style={{listStyleType:"none"}}><AiOutlineCheckCircle color='#8bc34a'/>Organic Tea</li>

                                  </ol>
                                 </Box>
                              </Box>
                              <Box padding={"20px"} textAlign={"center"}>
                              <CustomButton text={"Start Shopping"} icon={<ShoppingCart/>}/>
                              </Box>
                          </Box> </Box>

                             </Box>
                           
                          
                          
                          </Box>
                        
                      
                          
    
       
    
        
      
  )
}

export default About