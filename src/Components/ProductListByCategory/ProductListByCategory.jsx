import { Box , Typography ,Grid, Breadcrumbs, Link as MuiLink, FormControl, InputLabel, Select, MenuItem, TextField, IconButton, Slider,useMediaQuery } from '@mui/material'
import { green } from '@mui/material/colors'
import React, { useState } from 'react'
import { Link , useParams} from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import product1 from "../../assets/product1.jpg"
import product2 from "../../assets/product2.jpg"
import product3 from "../../assets/product3.jpg"
import product4 from "../../assets/product4.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const products=[{
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
  {
    id: 15,
    name: "Assorted Coffee",
    category: "Groceries",
    rating: 3.5,
    price: 3500,
    image: product1,
  },
  {
    id: 16,
    name: "Hand Sanitizer",
    category: "Groceries",
    rating: 4,
    price: 1500,
    image: product2,
  },
  {
    id: 17,
    name: "Handpicked Red Chillies",
    category: "Groceries",
    rating: 5,
    price: 1900,
    image: product3,
  },
  {
    id: 18,
    name: "Natural Extracted Edible Oil",
    category: "Groceries",
    rating: 4.5,
    price: 2500,
    image: product4,
  },
  {
    id: 19,
    name: "Assorted Coffee",
    category: "Groceries",
    rating: 3.5,
    price: 3500,
    image: product1,
  },
  {
    id: 20,
    name: "Hand Sanitizer",
    category: "Groceries",
    rating: 4,
    price: 1500,
    image: product2,
  },
  {
    id: 21,
    name: "Handpicked Red Chillies",
    category: "Groceries",
    rating: 5,
    price: 1900,
    image: product3,
  },
  {
    id: 22,
    name: "Natural Extracted Edible Oil",
    category: "Groceries",
    rating: 4.5,
    price: 2500,
    image: product4,
  },
  ]


  const ProductListByCategory = () => {
    const isMobile = useMediaQuery("(max-width : 580px)");
    const isTablet = useMediaQuery("(min-width : 580px) and (max-width : 1200px)");
    const isLaptop = useMediaQuery("(max-width:1299px)");
    const { categoryName } = useParams();
    const [sort, setSort] = useState('');
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  
    const handlePriceChange = (e, value) => {
      setPriceRange(value);
    };
  
    const handleChange = (e) => {
      setSort(e.target.value);
    };
  
    return (
      <Box sx={{ py: "80px", px: { xs: "20px", md: "0" } }} bgcolor={"#f8f6f3"}>
        <Box maxWidth={"1280px"} mx={"auto"}>
          <Grid container>
            <Grid item sx={{ display: { xs: "none", md: "block" } }} xs={0} md={3} px={"20px"} borderRight={"1px solid #ddd"}>
              <Box>
                <TextField
                  label="Search"
                  placeholder="Search Products..."
                  size="small"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <IconButton sx={{ backgroundColor: "green.main", color: "white", borderRadius: "5px", ml: "5px" }}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
              <Box mt={5}>
                <Typography variant='h4' color={"#333"}>Filter By Price</Typography>
                <Box px={"30px"} mt={3}>
                  <Slider
                    size='small'
                    getAriaLabel={() => 'Price Range'}
                    value={priceRange}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                  />
                </Box>
              </Box>
              <Box mt={5}>
                <Typography variant='h4' color={"#333"}>Filter By Category</Typography>
                <Box mt={3} pr={"30px"} display={"flex"} flexDirection={"column"} gap={"10px"}>
                  <Link style={{ textDecoration: "none", color: "#8bc34a" }} to={"/product-category/groceries"}>Groceries</Link>
                  <Link style={{ textDecoration: "none", color: "#8bc34a" }} to={"/product-category/juices"}>Juices</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={9} px={"30px"}>
              <Box sx={{ p: "15px 0" }}>
                <Breadcrumbs aria-label="breadcrumb">
                  <MuiLink component={Link} underline="hover" color="inherit" to="/">
                    HOME
                  </MuiLink>
                  <MuiLink component={Link} underline="hover" color="inherit" to="/everything">
                    Everything
                  </MuiLink>
                  <Typography color="text.primary">{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</Typography>
                </Breadcrumbs>
              </Box>
              <Box>
               <Typography variant="h1" color={"green.main"}>
                  {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
                </Typography>
                <Typography mt={3} variant="body1" pr={"50px"}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium doloremque quasi perferendis veritatis aliquid, nemo repellendus neque. Natus perferendis cupiditate eius adipisci iure veniam id error voluptatem
                </Typography>
              </Box>
              <Box mt={"30px"}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant='subtitle1'>Showing 1–9 of 12 results</Typography>
                  <FormControl size="small" sx={{ width: "30%" }}>
                    <InputLabel id="demo-simple-select-label">Default Sorting</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sort}
                      label="Default Sorting"
                      onChange={handleChange}
                    >
                      <MenuItem value={"All"}>Sort: All</MenuItem>
                      <MenuItem value={-1}>Sort: High to Low</MenuItem>
                      <MenuItem value={1}>Sort: Low to High</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box py={"50px"}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
                    gridColumnGap: "20px",
                    gridRowGap: "40px",
                  }}
                >
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`} // Update the link to include the product id
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ProductCard product={product} />
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };
  
  export default ProductListByCategory;