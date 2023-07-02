import { Box, Rating, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {

  const isTablet = useMediaQuery(
    "(min-width : 580px) and (max-width : 931px)"
  );
    const isMobile=useMediaQuery("(max-width:580px)");





  return (
  <Box width={isTablet ? "auto" : (isMobile ? "100%" : "auto")} padding={isMobile?"38px" :"0"} >
      <Box width={"100%"}>
        <Link to={`/product/${product.id}`}>
        <img style={{ width: "100%" }} src={product.image} alt="" />

        </Link>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={"5px"} py={"15px"}>
        <Typography
          variant="body2"
          textAlign={"center"}
          sx={{ opacity: "0.6" }}
        >
          {product.category}
        </Typography>
        <Typography
        component={Link}
        to={`/product/${product.id }`}
          variant="h2"
          sx={{ fontSize: "16px", color: "#111", textAlign: "center" }}
        >
          {product.name}
        </Typography>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Rating
            name="simple-controlled"
            value={product.rating}
            precision={0.2}
            size="small"
            readOnly
     
          />
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontSize: "14.4px",
            color: "#333",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaRupeeSign />
          {product.price.toLocaleString("en-IN")}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
