import {
    Box,
    Button,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";

  import React from "react";
  import { FaRegCalendar } from "react-icons/fa";
  import { Link } from "react-router-dom";
  import { Country, State, City } from "country-state-city";
  
  let labelStyle = {
    fontSize: "14px",
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: "700",
    color: "#333",
    mb: "5px",
  };
  
  let inputStyle = {
    "& > div": {
      borderRadius: "0",
      bgcolor: "white",
    },
    "& > div > input": {
      padding: "12px",
    },
  };
  
  const CheckoutPage = () => {
    return (
      <Box py={"70px"} bgcolor="#f8f6f3">
        <Box
          maxWidth={"1200px"}
          mx={"auto"}
          sx={{
            px: {
              xs: "20px",
              lg: 0,
            },
          }}
        >
          <Box>
            <Box>
              <Typography variant="h2">Checkout</Typography>
            </Box>
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
                <Typography variant="body1" color="#515151">
                  Please Enter All your details to checkout.
                </Typography>
              </Box>
            </Box>
            <Box mt={5}>
              <Grid container>
                <Grid item xs={12} md={6} lg={7}>
                  <Box py={2} borderBottom={"2px solid #e2e2e2"}>
                    <Typography variant="h4">Billing Details</Typography>
                  </Box>
                  <Box mt={3}>
                    <Grid container>
                      <Grid item xs={12} md={6} pr={2}>
                        <InputLabel sx={labelStyle}>First Name</InputLabel>
                        <TextField
                          sx={inputStyle}
                          type="text"
                          name="firstName"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} md={6} pl={2}>
                        <InputLabel sx={labelStyle}>Last Name</InputLabel>
                        <TextField
                          sx={inputStyle}
                          type="text"
                          name="lastName"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid container mt={3}>
                      <Grid item xs={12}>
                        <InputLabel sx={labelStyle}>
                          Company Name(optional)
                        </InputLabel>
                        <TextField
                          sx={inputStyle}
                          type="text"
                          name="lastName"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid container mt={3}>
                      <Grid item xs={12}>
                        <FormControl fullWidth sx={inputStyle}>
                          <InputLabel sx={labelStyle}>
                            Country / Region
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Country / Region"
                          >
                            <MenuItem value={"IN"}>India</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container mt={3}>
                      <Grid item xs={12}>
                        <InputLabel sx={labelStyle}>Street Address</InputLabel>
                        <TextField
                          sx={[inputStyle, { mb: "8px" }]}
                          type="text"
                          name="lastName"
                          placeholder="House Number and Street name"
                          fullWidth
                        />
                        <TextField
                          sx={inputStyle}
                          type="text"
                          name="lastName"
                          placeholder="Apartment, suite, unit, etc. (optional)"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid container mt={3}>
                      <Grid item xs={12}>
                        <FormControl fullWidth sx={inputStyle}>
                          <InputLabel sx={labelStyle}>Town / City</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Town / City"
                          >
                            {City.getCitiesOfState("IN", "HR").map((state) => (
                              <MenuItem key={state.isoCode} value={state.isoCode}>
                                {state.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container mt={3}>
                      <Grid item xs={12}>
                        <FormControl fullWidth sx={inputStyle}>
                          <InputLabel sx={labelStyle}>State</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="State"
                          >
                            <MenuItem value={""}>Select a State</MenuItem>
                            {State.getStatesOfCountry("IN").map((state) => (
                              <MenuItem key={state.isoCode} value={state.isoCode}>
                                {state.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid container mt={3}>
                      <Grid item xs={12}>
                        <InputLabel sx={labelStyle}>PIN Code</InputLabel>
                        <TextField
                          sx={inputStyle}
                          type="text"
                          name="lastName"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid container mt={3}>
                      <Grid item xs={12}>
                        <InputLabel sx={labelStyle}>Phone</InputLabel>
                        <TextField
                          sx={inputStyle}
                          type="text"
                          name="lastName"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Grid container mt={3}>
                      <Grid item xs={12}>
                        <InputLabel sx={labelStyle}>Email Address</InputLabel>
                        <TextField
                          sx={inputStyle}
                          type="text"
                          name="lastName"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={5} px={4}>
                  <Box border={"2px solid #ddd"} p={3}>
                    <Typography variant="h4">Your Order</Typography>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      mt={3}
                      borderBottom={"1px solid #e2e2e2"}
                      pb={2}
                    >
                      <Typography variant="body1" color="#333" fontWeight={"700"}>
                        Product
                      </Typography>
                      <Typography variant="body1" color="#333" fontWeight={"700"}>
                        Subtotal
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      mt={2}
                      borderBottom={"1px solid #e2e2e2"}
                      pb={2}
                    >
                      <Typography variant="body1" color="#333" fontWeight={"400"}>
                        Assorted Coffee x 1
                      </Typography>
                      <Typography variant="body1" color="#333" fontWeight={"400"}>
                        £35.00
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      mt={2}
                      borderBottom={"1px solid #e2e2e2"}
                      pb={2}
                    >
                      <Typography variant="body1" color="#333" fontWeight={"400"}>
                        Subtotal
                      </Typography>
                      <Typography variant="body1" color="#333" fontWeight={"400"}>
                        £35.00
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      mt={2}
                      borderBottom={"1px solid #e2e2e2"}
                      pb={2}
                    >
                      <Typography variant="body1" color="#333" fontWeight={"400"}>
                        Total
                      </Typography>
                      <Typography variant="body1" color="#333" fontWeight={"400"}>
                        £35.00
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      mt={3}
                      pb={2}
                    >
                      <Button variant="contained" sx={{color : "white"}} fullWidth size="large">Place Order</Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default CheckoutPage;