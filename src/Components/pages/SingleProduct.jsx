import { Box, Button, FormControl, FormHelperText, Grid, Input, InputLabel, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import {  Link } from "react-router-dom";
import product1 from "../../assets/product1.jpg"
import Rating from "../Rating"
import { useState } from "react";
import { Label } from "@mui/icons-material";
import CustomButton from "../Button/Button";
import { FaShoppingCart } from "react-icons/fa";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

//   function a11yProps(index) {
//     return {
//       id: `simple-tab-${index}`,
//       'aria-controls': `simple-tabpanel-${index}`,
//     };
//   }

const SingleProduct = () => {
  const isMobile=useMediaQuery("(max-width:632px)")
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(0);

  const handleRatingChange = (id,value) => {
    setRating(value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box py={"80px"} bgcolor="#f8f6f3">
      <Box maxWidth={"1200px"} mx={"auto"}>
        <Box>
          <Grid container>
            <Grid item xs={12}  lg={6} p={"20px"} textAlign={"center"}>
            <img style={{ height: isMobile?"300px":"600px", width:isMobile?"300px":"600px"}} src={product1} alt="" />

            </Grid>
            <Grid item xs={12} lg={6} px={5}>
              <Typography variant="h2">Assorted Coffee</Typography>
              <Box display={"flex"} alignItems={"center"} gap={"2px"} mt={4}>
                <Typography
                  variant="h3"
                  fontWeight={"700"}
                  color="#333"
                  fontFamily={"'Open Sans', sans-serif"}
                >
                  £35.00
                </Typography>
                <Typography variant="body1"> + Free Shipping</Typography>
              </Box>
              <Box mt={4}>
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                consectetur adipisci velit, sed quia non incidunt lores ta porro
                ame. numquam eius modi tempora incidunt lores ta porro ame.
              </Box>
              <Box
                display={"flex"}
                gap={"10px"}
                mt={4}
                borderBottom={"1px solid #e2e2e2"}
                pb={"20px"}
              >
                <input
                  value={0}
                  type="number"
                  style={{
                    padding: "5px 5px",
                    border: "1px solid lightgray",
                    outline: "none",
                    width: "50px",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "green.idle",
                    "&:hover": {
                      bgcolor: "green.main",
                    },
                  }}
                >
                  ADD TO CART
                </Button>
              </Box>
              <Box display={"flex"} gap={"10px"} mt={2}>
                <Typography variant="body2">
                  Categories :{" "}
                  <Link
                    to="/product-category/groceries"
                    style={{ textDecoration: "none", color: "#8bc34a" }}
                  >
                    Groceries
                  </Link>
                  ,{" "}
                  <Link
                    to="/product-category/juices"
                    style={{ textDecoration: "none", color: "#8bc34a" }}
                  >
                    Juices
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Description and reviews */}
        <Box mt={5}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              indicatorColor="primary"
            //   sx={{
            //     color : "black",
            //     "& div span" : {
            //         backgroundColor : "#8bc34a"
            //     }
            //   }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: "700",
                  color: "#515151",
                  "&.Mui-selected": {
                    fontSize: "16px",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: "700",
                    color: "#515151",
                  },
                }}
                label="Description"
              />
              <Tab
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: "700",
                  color: "#515151",
                  "&.Mui-selected": {
                    fontSize: "16px",
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: "700",
                    color: "#515151",
                  },
                }}
                label="Reviews"
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
                    <Typography variant="body1">
                    Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.
                    </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            There are No Review.
            <Box padding={"20px"}>
              
                <Typography variant="h5">Be the first to review</Typography>  
                <Typography variant="h6">Your email address will not be published. Required fields are marked *</Typography>
                 <Typography variant="h6">Your rating *</Typography>
                 <Rating value={rating} handleRating={handleRatingChange} color="#FFD700" />
                 <FormControl sx={{border:"1px solid grey", width:"100%" ,padding:"40px"}}>
                  
                   <Box width={"100%"} padding={"20px"}>   
                 <h5>Your Reviw</h5>
                  <Input type="textArea" htmlFor="my-input"sx={{width:"100%", padding:"3px"}}>Your Review</Input> 
                  </Box>
                  <Box display={"flex"} gap={"20px"} width={"100%"} padding={"20px"}>
                    <Box  width={"50%"} padding={"20px"}>
                    <h5>Name</h5>
                  <Input type="text" htmlFor="my-input" sx={{width:"50%", padding:"3px"}}>Your Review</Input> 
                    </Box>
                    <Box  width={"50%"} padding={"20px"}>
                    <h5>E-mail</h5>
                  <Input type="mail" htmlFor="my-input" sx={{width:"50%", padding:"3px"}}>Your Review</Input> 
                      </Box>
                  </Box>
                  <CustomButton text={"Submit"} icon={<FaShoppingCart />}  />
                                
              </FormControl>

              
            </Box>
          </TabPanel>
        </Box>
        <Box>
            
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
