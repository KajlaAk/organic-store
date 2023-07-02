import React from "react";
import Banner from "../Banner/Banner";
import { Box, Typography, useMediaQuery } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import RecyclingIcon from '@mui/icons-material/Recycling';
import CustomButton from "../Button/Button";
import { FaShoppingCart } from "react-icons/fa";
import leaf from "../../assets/leaf.png"
import ProductCard from "../ProductCard/ProductCard";
import product1 from "../../assets/product1.jpg"
import product2 from "../../assets/product2.jpg"
import product3 from "../../assets/product3.jpg"
import product4 from "../../assets/product4.jpg"
import product5 from "../../assets/lemon.jpg"
import product6 from "../../assets/colyflower.jpg"
import product7 from "../../assets/seeds.jpg"
import logoleaftop from "../../assets/logoleaftop.png"
import logo1 from "../../assets/logo1.svg"
import logo2 from "../../assets/logo2.svg"
import logo3 from "../../assets/logo3.svg"
import logo4 from "../../assets/logo4.svg"
import logo5 from "../../assets/logo5.svg"
import RecomodationCard from "../RecomodationCard/RecomodationCard";


const recomodationsection=[
  {
    id: 1,
    title: "Farm Fresh Fruits",
    desc: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
    bgimage: product5,
  },
  {
    id: 2,
    title: "Fresh Vegetables",
    desc: "Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.",
    bgimage: product6,
  },
  {
    id: 3,
    title: "Organic Legume",
    desc: "Phasellus sed urna mattis, viverra libero sed, aliquam est.",
    bgimage: product7,
  }
]

const products=[
  {
  id: 11,
  name: "Assorted Coffee",
  category: "Groceries",
  rating: 3.5,
  price: 3500,
  image: product1,
},
{
  id: 12,
  name: "Hand Sanitizer",
  category: "Groceries",
  rating: 4,
  price: 1500,
  image: product2,
},
{
  id: 13,
  name: "Handpicked Red Chillies",
  category: "Groceries",
  rating: 5,
  price: 1900,
  image: product3,
},
{
  id: 14,
  name: "Natural Extracted Edible Oil",
  category: "Groceries",
  rating: 4.5,
  price: 2500,
  image: product4,
},
]

const FeatureCard = ({ icon, mainText, text }) => {
  return (
    <Box display={"flex"} flex={1} gap={"15px"} p={"35px 25px"} bgcolor={"#333333"}>
      {icon}
      <Box>
        <Typography color="white" variant="h4">{mainText}</Typography>
        <Typography color="white" variant="subtitle1">{text}</Typography>
      </Box>
    </Box>
  );
};


const HomePage = () => {
  
    const isMobile = useMediaQuery("(max-width : 580px)");
    const isTablet = useMediaQuery(
      "(min-width : 580px) and (max-width : 1200px)"
    );
    const isLaptop =useMediaQuery("(max-width:1299px)");
    
    
  return (
    <div>
        <Banner/>
        <Box padding={"80px"} bgcolor={"#111111"} display={"grid"}
              gridTemplateColumns={
                isMobile
                  ? "1fr"
                  : isTablet
                  ? "repeat(2, 1fr)"
                  : "repeat(4, 1fr)"
                  
              } sx={{gridColumnGap:"20px", gridRowGap:"20px"}}>
        <FeatureCard mainText={"Free Shipping*"} text={"Above Rs.1000 only"} icon={<LocalShippingIcon sx={{color : "green.main" , fontSize : "2.3rem"}}/>} />
        <FeatureCard mainText={"Certified Orgainc"} text={"100% Gurantee"} icon={<VerifiedUserIcon sx={{color : "green.main" , fontSize : "2.3rem"}}/>} />
        <FeatureCard mainText={"Huge Savings"} text={"At Lowest Price"} icon={<LocalAtmIcon sx={{color : "green.main" , fontSize : "2.3rem"}}/>} />
        <FeatureCard mainText={"Easy Returns"} text={"No Questions Asked"} icon={<RecyclingIcon sx={{color : "green.main" , fontSize : "2.3rem"}}/>} />
            </Box>
           {/* =======My idea===== */}
          < Box bgcolor={"#fff"} p={"140px 0 50px"}>
        <Box maxWidth={"1200px"} mx={"auto"}>
            
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            alignItems={"center"}
          >
              <Typography variant="h2"textAlign={"center"}>Best Selling Products</Typography>
            </Box>
            <Box>
              <img  style={{marginLeft:"auto",marginRight:"auto",display:"block",paddingTop:"22px"}}src={leaf} alt=""/>
            </Box>
            <Box padding={isMobile?"auto" :"70px 0"} margin={isTablet ?"18px" :"0px"}>
            
            <Box
              display={"grid"}
              gridTemplateColumns={
                isMobile
                  ? "1fr"
                  : isTablet
                  ? "repeat(3, 1fr)"
                  : "repeat(4, 1fr)"
              }
              sx={{ gridColumnGap: "20px" }}
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Box>
            </Box>
            </Box>
            </Box>
            
            
      <Box sx={{ marginBottom: "-48px" }}>
        <Box sx={{ maxWidth: "600px", mx: "auto", textAlign: "center" }}>
          <img style={{ height: "70px" }} src={logoleaftop} alt="" />
        </Box>
      </Box>


           {/* my section */}
           <Box
        sx={{
          py: "100px",
          bgcolor: "#f8f6f3",
        }}
      >
        <Box
          display={isLaptop?"grid" : "flex"}
          sx={{
            maxWidth:isLaptop?"950px":"1200px",
            padding:"40px",
            mx: "auto",
            gridRowGap:"20px",
            gridColumnGap: "30px",
            
          }}
        >
          {recomodationsection.map((content) => (
          <RecomodationCard key={content.id} content={content} />
          ))}
        </Box>
      </Box>
           



            <Box bgcolor={"#111111"} py={"60px"}>
        <Box maxWidth={"1100px"} mx={"auto"} display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Typography variant={isTablet?"h4" :(isMobile?"h4":"h2")} color={"white"}>
              Get 25% Off On Your First Purchase!
            </Typography>
          </Box>
          <Box>
            <CustomButton text={"Shop Now"} icon={<FaShoppingCart />} />
          </Box>
        </Box>
      </Box>
      <Box bgcolor={"rgb(238,238,238)"}>
          <Box maxWidth={"600px"} mx={"auto"} minHeight={"100px"} display={"flex"} alignItems={"center"} padding={"35px"} >
            <Typography textAlign={"center"} width={"100%"} variant="h4" color="black">
            Try It For Free. No Registration Needed.
            </Typography>
          </Box>

        </Box>
        <Box>
          <Box display={isLaptop ? "grid": "flex" } textAlign={"center"}ml={5}>
            <Box margin={5}>
            <Typography variant="h4">Featured Brands:</Typography>
            </Box>
            <Box>
            <img src={logo1} style={{height:"auto" ,width:"auto"}}/>
            <img src={logo2} style={{height:"auto" ,width:"auto"}}/>
            <img src={logo3} style={{height:"auto" ,width:"auto"}}/>
            <img src={logo4} style={{height:"auto" ,width:"auto"}}/>
            <img src={logo5} style={{height:"auto" ,width:"auto"}}/>
            </Box>
            </Box>
        </Box>
    </div>
  )
}

export default HomePage



// import React from "react";
// import Banner from "../Banner/Banner";
// import { Box, Typography, useMediaQuery } from "@mui/material";
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import LocalAtmIcon from '@mui/icons-material/LocalAtm';
// import RecyclingIcon from '@mui/icons-material/Recycling';
// import CustomButton from "../Button/Button";
// import { FaShoppingCart } from "react-icons/fa";
// import leaf from "../../assets/leaf.png"
// import ProductCard from "../ProductCard/ProductCard";
// import product1 from "../../assets/product1.jpg"
// import product2 from "../../assets/product2.jpg"
// import product3 from "../../assets/product3.jpg"
// import product4 from "../../assets/product4.jpg"
// import product5 from "../../assets/lemon.jpg"
// import product6 from "../../assets/colyflower.jpg"
// import product7 from "../../assets/seeds.jpg"
// import logoleaftop from "../../assets/logoleaftop.png"
// import RecomodationCard from "../RecomodationCard/RecomodationCard";

// const recomodationsection = [
//   {
//     id: 1,
//     title: "Farm Fresh Fruits",
//     desc: "Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
//     bgimage: product5,
//   },
//   {
//     id: 2,
//     title: "Fresh Vegetables",
//     desc: "Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.",
//     bgimage: product6,
//   },
//   {
//     id: 3,
//     title: "Organic Legume",
//     desc: "Phasellus sed urna mattis, viverra libero sed, aliquam est.",
//     bgimage: product7,
//   }
// ]

// const products = [
//   {
//     id: 11,
//     name: "Assorted Coffee",
//     category: "Groceries",
//     rating: 3.5,
//     price: 3500,
//     image: product1,
//   },
//   {
//     id: 12,
//     name: "Hand Sanitizer",
//     category: "Groceries",
//     rating: 4,
//     price: 1500,
//     image: product2,
//   },
//   {
//     id: 13,
//     name: "Handpicked Red Chillies",
//     category: "Groceries",
//     rating: 5,
//     price: 1900,
//     image: product3,
//   },
//   {
//     id: 14,
//     name: "Natural Extracted Edible Oil",
//     category: "Groceries",
//     rating: 4.5,
//     price: 2500,
//     image: product4,
//   },
// ]

// const FeatureCard = ({ icon, mainText, text }) => {
//   return (
//     <Box display="flex" flex={1} gap={3} p={3} bgcolor="#333333">
//       {icon}
//       <Box>
//         <Typography color="white" variant="h4">{mainText}</Typography>
//         <Typography color="white" variant="subtitle1">{text}</Typography>
//       </Box>
//     </Box>
//   );
// };

// const HomePage = () => {
//   const isMobile = useMediaQuery("(max-width: 580px)");
//   const isTablet = useMediaQuery("(min-width: 580px) and (max-width: 1200px)");

//   return (
//     <div>
//       <Banner />
//       <Box
//         padding={isMobile ? "40px" : "80px"}
//         bgcolor="#111111"
//         display="grid"
//         gridTemplateColumns={
//           isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)"
//         }
//         gridColumnGap={isMobile ? "10px" : "20px"}
//         gridRowGap={isMobile ? "10px" : "20px"}
//       >
//         <FeatureCard
//           mainText="Free Shipping*"
//           text="Above Rs.1000 only"
//           icon={<LocalShippingIcon sx={{ color: "green.main", fontSize: "2.3rem" }} />}
//         />
//         <FeatureCard
//           mainText="Certified Organic"
//           text="100% Guarantee"
//           icon={<VerifiedUserIcon sx={{ color: "green.main", fontSize: "2.3rem" }} />}
//         />
//         <FeatureCard
//           mainText="Huge Savings"
//           text="At Lowest Price"
//           icon={<LocalAtmIcon sx={{ color: "green.main", fontSize: "2.3rem" }} />}
//         />
//         <FeatureCard
//           mainText="Easy Returns"
//           text="No Questions Asked"
//           icon={<RecyclingIcon sx={{ color: "green.main", fontSize: "2.3rem" }} />}
//         />
//       </Box>
//       <Box bgcolor="#fff" p={isMobile ? "40px 0 20px" : "140px 0 50px"}>
//         <Box maxWidth="1200px" mx="auto">
//           <Box
//             display="flex"
//             flexDirection="column"
//             gap={2}
//             alignItems={isMobile ? "center" : "flex-start"}
//           >
//             <Typography variant="h2" textAlign="center">
//               Best Selling Products
//             </Typography>
//             {!isMobile && (
//               <Box alignSelf="flex-end">
//                 <img src={leaf} alt="" />
//               </Box>
//             )}
//           </Box>
//           <Box padding={isMobile ? "30px 0px" : "70px 0px"}>
//             <Box
//               display="grid"
//               gridTemplateColumns={
//                 isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)"
//               }
//               gridColumnGap={isMobile ? "10px" : "20px"}
//             >
//               {products.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           marginBottom: isMobile ? "-48px" : 0,
//           textAlign: isMobile ? "center" : "left",
//         }}
//       >
//         <Box
//           sx={{
//             maxWidth: "600px",
//             mx: "auto",
//           }}
//         >
//           <img
//             style={{ height: isMobile ? "70px" : "100px", display: "block", margin: "0 auto" }}
//             src={logoleaftop}
//             alt=""
//           />
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           py: "100px",
//           bgcolor: "#f8f6f3",
//         }}
//       >
//         <Box
//           sx={{
//             maxWidth: "1200px",
//             mx: "auto",
//             display: "grid",
//             gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
//             gridColumnGap: "30px",
//           }}
//         >
//           {recomodationsection.map((content) => (
//             <RecomodationCard key={content.id} content={content} />
//           ))}
//         </Box>
//       </Box>
//       <Box bgcolor="#111111" py="60px">
//         <Box
//           maxWidth="1100px"
//           mx="auto"
//           display="flex"
//           justifyContent={isMobile ? "center" : "space-between"}
//         >
//           <Box>
//             <Typography variant="h2" color="white">
//               Get 25% Off On Your First Purchase!
//             </Typography>
//           </Box>
//           <Box>
//             <CustomButton text="Shop Now" icon={<FaShoppingCart />} />
//           </Box>
//         </Box>
//       </Box>
//       <Box bgcolor="rgb(238,238,238)">
//         <Box
//           maxWidth="600px"
//           mx="auto"
//           minHeight="100px"
//           display="flex"
//           alignItems="center"
//           padding="35px"
//         >
//           <Typography textAlign="center" width="100%" variant="h4" color="black">
//             Try It For Free. No Registration Needed.
//           </Typography>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default HomePage;
