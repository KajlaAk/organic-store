import { Box, Input, Typography, useMediaQuery } from '@mui/material'
import logoleaftop from "../../assets/logoleaftop.png"
import {IoMdCall } from "react-icons/Io"
import {AiOutlineMail} from "react-icons/ai"
import {MdLocationOn} from "react-icons/Md"
import leaf from "../../assets/leaf.png"
import {RiArrowDropDownLine} from "react-icons/Ri"


import React from 'react'
import { Label } from '@mui/icons-material'
import Collapsible from 'react-collapsible'

const Contact = () => {
  const isMobile= useMediaQuery("(max-width:767px)")

  return (
      <Box backgroundColor={"#f8f6f3"}>
           <Box >
            <Typography variant='h1' p={5} sx={{textAlign:"center" ,backgroundColor:"#f8f6f3"}}>Get In Touch</Typography>
           </Box>
           <Box sx={{ marginBottom: "48px" }}>
            <Box sx={{ maxWidth: "600px", mx: "auto", textAlign: "center" }}>
            <img style={{ height: "70px", marginTop:"-25px" }} src={logoleaftop} alt="" />
            </Box>
            </Box>

            {/* -----Next-Section---- */}
            <Box>
                <Box maxWidth={"1200px"} ml={"auto"} mr={"auto"} mt={"-90px"} boxShadow={"0 0 50px -10px rgb(0 0 0 / 13%)"}display={"flex"} backgroundColor={"#ffffff"}>
                     <Box display={isMobile?"grid":"flex"} width={"100%"} padding={"100px"} gap={"20px"}>
                        <Box sx={{border:"1px solid grey",width:isMobile?"100%":"33.33%",textAlign:"center",padding:"15px"}}> <IoMdCall color='#8bc34a' size={"40px"}/>
                        <p style={{marginBottom: "58px"}}>+123 456 7890 
                          <br></br> +123 456 7890</p>
                        </Box>
                        <Box sx={{border:"1px solid grey",width:isMobile?"100%":"33.33%",textAlign:"center",padding:"15px"}}><AiOutlineMail  color='#8bc34a' size={"40px"}/>
                        <p style={{marginBottom: "58px"}}>info@example.com <br></br>cont@example.com/</p>

                        </Box>
                        <Box sx={{border:"1px solid grey",width:isMobile?"100%":"33.33%",textAlign:"center",padding:"15px"}}><MdLocationOn color='#8bc34a' size={"40px"}/>
                        <p style={{marginBottom: "58px"}}>1569 Ave, <br></br>New York NY 10028, USA</p>

                        </Box>
                     </Box>
                </Box>
            </Box>

             {/* -----Next-Section---- */}

             <Box padding={"50px"}>
                <Box textAlign={"center"}>
                <Typography variant='h3'>Frequently Asked Question!</Typography>
                <img src={leaf}/>
                </Box>
            </Box>   

            {/* -----Next-Section---- */}
            {/* <Box>
              <Box maxWidth={"1200px"} ml={"auto"} mr={"auto"} display={isMobile?"grid":"flex"} marginBottom={"50px"}>
                <Box width={isMobile?"400px":"600px"} textAlign={"center"}>
                <Box>
                  <b style={{borderBottom:"1px solid black", padding:"10px"}}>Pulvinar nostrud class cum facilis? <RiArrowDropDownLine size={"30px"} style={{marginBottom:"-9px"}} /></b>
                  </Box>
                  <Box marginTop={"60px"}>
                  <b style={{borderBottom:"1px solid black", padding:"10px"}}>Consequat nesciunt fusce facilisi? <RiArrowDropDownLine size={"30px"} style={{marginBottom:"-9px"}} /></b>
                  </Box>
                  <Box marginTop={"60px"}>
                  <b style={{borderBottom:"1px solid black", padding:"10px"}}>Consequat nesciunt fusce facilisi?<RiArrowDropDownLine size={"30px"} style={{marginBottom:"-9px"}} /></b>
                   </Box>

                </Box>
                <Box width={isMobile?"400px":"600px"} textAlign={"center"}>
                <Box marginTop={isMobile?"60px":"0px"}>

                   <b style={{borderBottom:"1px solid black", padding:"10px"}}>Pon excepturi numquam, facilis? <RiArrowDropDownLine size={"30px"} style={{marginBottom:"-9px"}} /></b>
                   </Box>
                   <Box marginTop={"60px"}>
                   <b style={{borderBottom:"1px solid black", padding:"10px"}}>Consequat nesciunt fusce facilisi?<RiArrowDropDownLine size={"30px"} style={{marginBottom:"-9px"}} /></b>
                   </Box>
                   <Box marginTop={"60px"}>
                   <b style={{borderBottom:"1px solid black", padding:"10px"}}>Pon excepturi numquam, facilis?<RiArrowDropDownLine size={"30px"} style={{marginBottom:"-9px"}} /></b>
                   </Box>

                </Box>


              </Box>

            </Box> */}
            <Box>
              <Box maxWidth={"1200px"} ml={"auto"} gap={"10px"} mr={"auto"} display={isMobile?"grid":"flex"} marginBottom={"50px"}>
              <Box width={isMobile?"100%":"600px"} padding={isMobile?"40px":"10px"} >
                    <Box padding={"20px"} borderBottom={"1px solid #d5d8dc"}>
                      <Collapsible trigger="Pulvinar nostrud class cum facilis?" triggerStyle={{fontWeight:"bold",cursor:"pointer",width:"600px"}}>
                      
                        <Typography variant='subtitle1'>
                        I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                        </Typography>
                      
                      </Collapsible>
                    </Box>
                    <Box padding={"20px"}  borderBottom={"1px solid #d5d8dc"}>
                      <Collapsible trigger="Consequat nesciunt fusce facilisi?" triggerStyle={{fontWeight:"bold" ,cursor:"pointer",width:"600px"}}>
                        <Typography variant='subtitle1'>
                        I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                        </Typography>
                      
                      </Collapsible>
                    </Box>
                    <Box padding={"20px"}  borderBottom={"1px solid #d5d8dc"}>
                      <Collapsible trigger="Consequat nesciunt fusce facilisi?" triggerStyle={{fontWeight:"bold" ,cursor:"pointer",width:"600px"}}>
                        <Typography variant='subtitle1'>
                        I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                        </Typography>
                      
                      </Collapsible>
                    </Box>

                  </Box>
                  <Box width={isMobile?"100%":"600px"} padding={isMobile?"40px":"10px"}>
                  <Box padding={"20px"}  borderBottom={"1px solid #d5d8dc"}>
                      <Collapsible trigger="Pon excepturi numquam, facilis?" triggerStyle={{fontWeight:"bold" ,cursor:"pointer",width:"600px"}}>
                        <Typography variant='subtitle1'>
                        I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                        </Typography>
                      
                      </Collapsible>
                    </Box>
                    <Box padding={"20px"} borderBottom={"1px solid #d5d8dc"}>
                      <Collapsible trigger="Consequat nesciunt fusce facilisi?" triggerStyle={{fontWeight:"bold" ,cursor:"pointer",width:"600px"}}>
                        <Typography variant='subtitle1'>
                        I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                        </Typography>
                      
                      </Collapsible>
                    </Box>
                    <Box padding={"20px"}  borderBottom={"1px solid #d5d8dc"}>
                      <Collapsible trigger="Consequat nesciunt fusce facilisi?" triggerStyle={{fontWeight:"bold" ,cursor:"pointer",width:"600px"}}>
                        <Typography variant='subtitle1'>
                        I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                        </Typography>
                      
                      </Collapsible>
                    </Box>

                  </Box>


              </Box>
              
              
            </Box>
           

      </Box>
  )
}

export default Contact




// <Box>
//               <Box maxWidth={"1200px"} ml={"auto"} mr={"auto"} p={"50px"}>
//               <Box textAlign={"center"}>
//                 <Typography variant='h3'>Frequently Asked Question!</Typography>
//                 <img src={leaf}/>

//               </Box>

//               <Box display={"flex"} width={"100%"}>
//                  <Box>
//                   <Box>
//                   <b style={{borderBottom:"1px solid black", padding:"10px"}}>Pulvinar nostrud class cum facilis? <RiArrowDropDownLine size={"30px"} style={{marginBottom:"-9px"}} /></b>
//                   </Box>
//                   <Box marginTop={"60px"}>
//                   <b style={{borderBottom:"1px solid black", padding:"10px"}}>Consequat nesciunt fusce facilisi? <RiArrowDropDownLine size={"30px"} style={{marginBottom:"-9px"}} /></b>
//                   </Box>
//                   <Box marginTop={"60px"}>
//                   <b style={{borderBottom:"1px solid black", padding:"10px"}}>Consequat nesciunt fusce facilisi?<RiArrowDropDownLine size={"30px"} style={{marginBottom:"-9px"}} /></b>
//                   </Box>
//                   </Box>
//                  <Box><Box>
//                   
//                   </Box></Box>
//                   </Box>
//               </Box>
//              </Box><Box>
//                   <b style={{borderBottom:"1px solid black", padding:"10px"}}>Pon excepturi numquam, facilis? <RiArrowDropDownLine size={"30px"} style={{marginBottom:"-9px"}} /></b>
//                   </Box>
//                   <Box marginTop={"60px"}>
//                   <b style={{borderBottom:"1px solid black", padding:"10px"}}>Consequat nesciunt fusce facilisi?<RiArrowDropDownLine size={"30px"} style={{marginBottom:"-9px"}} /></b>
//                   </Box>
//                   <Box marginTop={"60px"}>
//                   <b style={{borderBottom:"1px solid black", padding:"10px"}}>Pon excepturi numquam, facilis?<RiArrowDropDownLine size={"30px"} style={{marginBottom:"-9px"}} /></b>
//                   </Box>