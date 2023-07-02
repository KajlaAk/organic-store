import React from "react";
import { Box, Typography, useMediaQuery } from '@mui/material';
import logo from "../../assets/logo.png";
import play from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

let listStyle = {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  color: "rgba(255,255,255,0.66)",
};

const Footer = () => {
  const isMobile = useMediaQuery("(max-width : 660px)");

  return (
    <Box component={"footer"} bgcolor={"#001524"}>
      {/* Main footer Section starts here */}
      <Box py={"75px"}>
        <Box>
          <Box
            sx={{
              maxWidth: "1200px",
              mx: "auto",
              display: "grid",
              gridTemplateColumns: !isMobile ? "2fr 1fr 1fr" : "1fr",
              gridColumnGap: "10px",
              gridRowGap : "40px"
            }}
          >
            {/* Logo and Description section start here */}
            <Box px={isMobile ? "50px" : 0}>
              <Box mb={"45px"}>
                <img style={{ height: "80px" }} src={logo} alt="" />
              </Box>
              <Box display={"flex"}>
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "oblique",
                    color: "rgba(255,255,255,0.66)",
                    flexBasis: "75%",
                    flexGrow: 0,
                    fontWeight: "bold",
                  }}
                >
                  Maecenas mi justo, interdum at consectetur vel, tristique et
                  arcu. Ut quis eros blandit, ultrices diam in, elementum ex.
                  Suspendisse quis faucibus urna. Suspendisse pellentesque.
                </Typography>
              </Box>
            </Box>

            {/* Logo and Description section Ends here */}

            {/* Quick Links and Site links section start here */}
            <Box px={isMobile ? "50px" : 0}>
              <Box>
                <Typography
                  variant="h4"
                  color="white"
                  fontSize={"22px"}
                  mb={"22px"}
                >
                  Quick Links
                </Typography>
                <ul style={{ ...listStyle, marginBottom: "45px" }}>
                  <li>About</li>
                  <li>Cart</li>
                  <li>Checkout</li>
                  <li>Contact</li>
                  <li>Home</li>
                  <li>My Account</li>
                  <li>Shop</li>
                </ul>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  color="white"
                  fontSize={"22px"}
                  mb={"22px"}
                >
                  Site Links
                </Typography>
                <ul style={listStyle}>
                  <li>Privacy Policy</li>
                  <li>Shipping Details</li>
                  <li>Offers Coupons</li>
                  <li>Terms & Conditions</li>
                </ul>
              </Box>
            </Box>
            {/* Quick Links and Site links section ends here */}

            {/* Download section starts here */}
            <Box px={isMobile ? "50px" : 0}>
              <Box>
                <Typography
                  variant="h4"
                  color="white"
                  fontSize={"22px"}
                  mb={"22px"}
                >
                  Download Our Mobile App
                </Typography>
                <Typography variant="body1" color={"rgba(255,255,255,0.66)"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  aliquam gravida sollicitudin. Praesent porta enim mi, non
                  tincidunt libero interdum sit amet.
                </Typography>
              </Box>
              <Box mt={"40px"}>
                <Typography
                  variant="h4"
                  color="white"
                  fontSize={"22px"}
                  mb={"22px"}
                >
                  Site Links
                </Typography>
                <ul style={listStyle}>
                  <li style={{ color: "#8bc34a" }}>Know More About Us</li>
                  <li style={{ color: "#8bc34a" }}>Visit Store</li>
                  <li style={{ color: "#8bc34a" }}>Let's Connect</li>
                  <li style={{ color: "#8bc34a" }}>Locate Stores</li>
                </ul>
                <Box mt={"20px"}>
                  <img
                    style={{
                      width: "125px",
                      height: "35px",
                      marginRight: "10px",
                    }}
                    src={play}
                    alt=""
                  />
                  <img
                    style={{ width: "125px", height: "35px" }}
                    src={appStore}
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
            {/* Download section ends here */}
          </Box>
        </Box>
      </Box>
      {/* Main footer Section ends here */}

      {/* Copyright section */}
      <Box
        sx={{
          p: {
            xs: "20px 15px",
            md: "25px 30px",
          },
          borderTop: "1px solid rgba(125,125,125,0.27)",
          minHeight: "80px",
        }}
      >
        <Box>
          <Box
            maxWidth={"1200px"}
            mx={"auto"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1" sx={{ color: "#ffffffa8" }}>
              Copyright &copy; | Organic Store
            </Typography>
            <Box display={"flex"} gap={"20px"} alignItems={"center"}>
              <a href="#" style={{ height: "18px" }}>
                <FaFacebook fontSize={"18px"} color="rgba(255,255,255,0.66)" />
              </a>
              <a href="#" style={{ height: "18px" }}>
                <FaTwitter fontSize={"18px"} color="rgba(255,255,255,0.66)" />
              </a>
              <a href="#" style={{ height: "18px" }}>
                <FaInstagram fontSize={"18px"} color="rgba(255,255,255,0.66)" />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;