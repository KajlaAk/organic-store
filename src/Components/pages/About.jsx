import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import logoleaftop from "../../assets/logoleaftop.png"
import aboutimg from "../../assets/aboutlogo.jpg"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import ImageSlider from "react-simple-image-slider"
import img1 from "../../assets/sliderimg1.jpg"
import img2 from "../../assets/sliderimg2.jpg"
import img3 from "../../assets/sliderimg3.jpg"
import img4 from "../../assets/sliderimg4.jpg"

const images=[
  img1, img2 , img3 ,img4
]

const About = () => {
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

      <Box display={"flex"} sx={{maxWidth:"1200px"}} ml={"auto"} mr={"auto"} position={"relative"} p={"40px"}>
        <Box > 
            <Typography variant='h2' pt={"80px"}> We Are Your Favourite Store.</Typography>
           <p style={{paddingTop:"20px"}}> Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.

            </p> <p style={{paddingTop:"20px"}}> Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.</p>
        </Box>
        <Box>
            <img style={{width:"570px" , padding:"50px"}} src={aboutimg}/>
        </Box>
      </Box>

             {/* -----Next-Section---- */}
             <Box   sx={{backgroundColor:"#000",color:"white", padding:"30px 0" }}>
                <Box display={"flex"} sx={{marginLeft:"40px", marginRight:"40px" ,columnGap:"100px"}} position={"relative"} >
                <Box><Typography variant='h4' sx={{color:"white",alignContent:"center", alignItems:"center", padding:"5px"}}>Numbers Speak <p>For Themselves!</p></Typography></Box>
                <Box>
                <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>(false)}> {counterOn && <Typography variant='h2'> <CountUp start={0} end={5000} duration={2} delay={0}/>+ <Typography >Curated Products</Typography></Typography>}</ScrollTrigger> 
                </Box>
                <Box><Box>
                <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>(false)}> {counterOn && <Typography variant='h2'> <CountUp start={0} end={800} duration={2} delay={0}/>+ <Typography >Curated Products</Typography></Typography>}</ScrollTrigger> 
                </Box></Box>
                <Box><Box>
                <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>(false)}> {counterOn && <Typography variant='h2'> <CountUp start={0} end={40} duration={2} delay={0}/>+ <Typography >Product Categories</Typography></Typography>}</ScrollTrigger> 
                </Box></Box>
                </Box>
             </Box>
                      {/* -----Next-Section---- */}

                      <Box>
                        <Box padding={"100px"}maxWidth={"1200px"} display={"flex"} mr={"auto"} ml={"auto"} position={"relative"} >
                          <Box width={"100%"} display={"flex"} sx={{backgroundColor:"rgb(238,238,238)"}}> 
                          <Box width={"46%"} m={"27px"}  sx={{backgroundColor:"rgb(238,238,238)"}}>
              <ImageSlider
              width={400}
              height={504}
               images={[...images]}
                 showBullets={true}
                  showNavs={true}
                />

                </Box>
                          <Box width={"54%"}>vxxxxxxxxxxxxxxxxxxx</Box>
                          </Box>
                        </Box>
                      </Box>

    </Box>  
       
    
        
      
  )
}

export default About