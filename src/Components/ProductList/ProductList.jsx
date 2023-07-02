import { Box , Typography ,Grid, Breadcrumbs, Link as MuiLink, FormControl, InputLabel, Select, MenuItem, TextField, IconButton, Slider } from '@mui/material'
import { green } from '@mui/material/colors'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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



const ProductList = () => {
    const [sort,setSort]=useState('');
    const [priceRange,setPriceRange]=useState([0,10000]);

    const handlePriceChange=(e,value)=>{
      setPriceRange(value);
    }

    const handleChange=()=>{
        setSort(e.target.value);
    }

  return (
    <Box sx={{py:"80px" ,px: {
        xs:"20px",md:"0"
    }}} bgcolor={"#f8f6f3"}>
     <Box maxWidth={"1280px"} mx={"auto"}>
        <Grid container>
            <Grid item  sx={{
            display:{
                xs:"none",
                md:"block"
            }
            }}xs={0} md={3} px={"20px"}>
       
             <Box>
                <TextField label="search"placeholder='Search Products...' size='small'/>
                <IconButton sx={{backgroundColor:"green.main" ,color:"white", borderRadius:"5px",ml:"5px"}}>
               <ArrowForwardIosIcon  />
                </IconButton>
             </Box>
             <Box mt={5}>
                <Typography variant='h4' color={"#333"}>Filtter By Price</Typography>
                <Box px={"30px"} mt={3}>
                <Slider size='small'
                   getAriaLabel={() => 'Price Range'}
                   value={priceRange }
                   onChange={handlePriceChange}
                   valueLabelDisplay="auto"
                    />
                </Box>
             </Box>
                 
             <Box mt={5}>
                <Typography variant='h4' color={"#333"}>Filtter By Category</Typography>
                <Box mt={3} pr={"30px"} display={"flex"} flexDirection={"column"} gap={"10px"}>
                  <Link style={{textDecoration : "none", color : "#8bc34a"}} to={"/product-category/groceries"}>Groceries</Link>
                  <Link style={{textDecoration : "none", color : "#8bc34a"}} to={"/product-category/juices"}>Juices</Link>
                </Box>
             </Box>



            </Grid>






            <Grid item xs={12} md={9} px={"30px"}>
            <Box sx={{p:"15px 0"}}>
            <Breadcrumbs aria-label="breadcrumb">
        <MuiLink component={Link} underline="hover" color="inherit" to="/">
         HOME
        </MuiLink>
        <Typography color="text.primary">SHOP</Typography>
      </Breadcrumbs>
            </Box>
            <Box>
                <Typography variant='h1' color={"green.main"}>SHOP</Typography>
            </Box>
            <Box mt={"30px"}>
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography variant='subtitle1'>Showing 1–9 of 12 results</Typography>
                    <FormControl  size="small" sx={{width:"30%"}}>
  <InputLabel id="demo-simple-select-label">Default Sorting</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={sort}
    label="Default Sorting"
    onChange={handleChange}
  >
    <MenuItem value={-1}>Sort: High to Low</MenuItem>
    <MenuItem value={1}>Sort: Low to High</MenuItem>
 
  </Select>
</FormControl>
            </Box>
            </Box>
            <Box py={"50px"}>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridColumnGap: "20px",
                    gridRowGap: "40px",

                }}>
                    {
                        products.map(product=>(
                            <ProductCard key ={product.id} product={product}/>
                        ))
                    }
                </Box>
            </Box>
            </Grid>

        </Grid>
 
     </Box>
    </Box>
  )
}

export default ProductList