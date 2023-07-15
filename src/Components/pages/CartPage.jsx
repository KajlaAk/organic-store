import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  Divider,
  TableBody,
  TableFooter,
  TextField,
} from "@mui/material";
import product1 from "../../assets/product1.jpg"
import product2 from "../../assets/product2.jpg"
import product3 from "../../assets/product3.jpg"
import product4 from "../../assets/product4.jpg"
import { FaRegCalendar, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

// const cartProducts = [
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
// ];

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([
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
  ]);
  const handleDeleteItem = (itemId) => {
    const updatedCartProducts = cartProducts.filter(
      (item) => item.id !== itemId
    );
    setCartProducts(updatedCartProducts);
  };

  return (
    <Box py={"70px"} bgcolor="#f8f6f3">
      <Box maxWidth={"1200px"} mx={"auto"}>
        <Box>
          <Box>
            <Typography variant="h2">Cart</Typography>
          </Box>
          {cartProducts.length > 0 ? (
            <Box mt={4}>
              <TableContainer>
                <Table sx={{ border: "1px solid #e2e2e2" }}>
                  <TableHead sx={{ bgcolor: "white" }}>
                    <TableRow sx={{ borderBottom: "1px solid #e2e2e2" }}>
                      <TableCell
                        sx={{
                          border: "0",
                          fontWeight: "700",
                          fontSize: "16px",
                        }}
                      ></TableCell>
                      <TableCell
                        sx={{
                          border: "0",
                          fontWeight: "700",
                          fontSize: "16px",
                        }}
                      ></TableCell>
                      <TableCell
                        sx={{
                          border: "0",
                          fontWeight: "700",
                          fontSize: "16px",
                        }}
                      >
                        Product
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "0",
                          fontWeight: "700",
                          fontSize: "16px",
                        }}
                      >
                        Price
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "0",
                          fontWeight: "700",
                          fontSize: "16px",
                        }}
                      >
                        Quantity
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "0",
                          fontWeight: "700",
                          fontSize: "16px",
                        }}
                      >
                        Subtotal
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartProducts.map((item) => (
                      <TableRow>
                        <TableCell align="center">
                          <Box
                            sx={{
                              border: "1px solid #ada5a5",
                              borderRadius: "50%",
                              height: "25px",
                              width: "25px",
                              mx: "auto",
                              display: "grid",
                              placeContent: "center",
                              cursor: "pointer",
                            }}
                            onClick={() => handleDeleteItem(item.id)}

                          >
                            <FaTrash />
                          </Box>
                        </TableCell>
                        <TableCell align="center" sx={{}}>
                          <img
                            style={{ maxWidth: "70px", height: "auto" }}
                            src={item.image}
                            alt=""
                          />
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>{item.price * 2}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={6} sx={{ textAlign: "right" }}>
                        <Button
                          sx={{
                            bgcolor: "green.idle",
                            "&:hover": {
                              bgcolor: "green.main",
                            },
                          }}
                          variant="contained"
                        >
                          Update Cart
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </Box>
          ) : (
            <Box>
              <Box mt={4}>
                <Divider
                  sx={{
                    borderColor: "green.main",
                    borderBottomWidth: "medium",
                  }}
                />
              </Box>
              <Box mt={2} display={"flex"} gap={3} alignItems={"center"}>
                <FaRegCalendar style={{ color: "#8bc34a" }} />
                <Typography variant="body1">
                  Your cart is currently empty.
                </Typography>
              </Box>
              <Box mt={4}>
                <Link to="/everything">
                  <Button
                    size="large"
                    variant="contained"
                    sx={{
                      bgcolor: "green.idle",
                      "&:hover": {
                        bgcolor: "green.main",
                      },
                    }}
                  >
                    Return to Shop
                  </Button>
                </Link>
              </Box>
            </Box>
          )}
        </Box>
        {/* Checkout Box */}
        <Box mt={5}>
          <Box maxWidth={"600px"} ml={"auto"} border={"1px solid #e2e2e2"}>
            <Box
              px={3}
              py={"14px"}
              bgcolor="white"
              borderBottom={"1px solid #e2e2e2"}
            >
              <Typography variant="h3">Cart Totals</Typography>
            </Box>
            <Box px={3} py={"20px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                px={3}
                py={"14px"}
                borderBottom={"1px solid #e2e2e2"}
              >
                <Typography sx={{ width: "50%" }} variant="body1">
                  Subtotal
                </Typography>
                <Typography sx={{ width: "50%" }} variant="body1">
                  {" "}
                  £35.00
                </Typography>
              </Box>

              <Box
                display={"flex"}
                alignItems={"center"}
                px={3}
                py={"14px"}
                borderBottom={"1px solid #e2e2e2"}
              >
                <Typography sx={{ width: "50%" }} variant="body1">
                  Total
                </Typography>
                <Typography sx={{ width: "50%" }} variant="body1">
                  {" "}
                  £35.00
                </Typography>
              </Box>
              <Link to={"/checkout"}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  
                  sx={{
                    mt: "20px ",
                    bgcolor: "green.idle",
                    "&:hover": {
                      bgcolor: "green.main",
                    },
                  }}
                >
                  Proceed to Checkout
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
