import React from "react";
import logo from "../../assets/logo.svg";
import CartPage from "../pages/CartPage";
import About from "../../Components/pages/About"
import { Link } from "react-router-dom";
import {
  Badge,
  Box,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const isMobile = useMediaQuery("(max-width:920px)");
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      px={"40px"}
      py={2}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={"40px"}
      >
        <Box>
          <Link to ="/">
          <img src={logo} style={{ height: "70px" }} alt="" />

          </Link>
        </Box>
        {!isMobile && (
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"30px"}
          >
            <Typography
              variant="body1"
              color={"grey.main"}
              sx={{ textDecoration: "none" }}
              component={Link}
              to={"/"}
            >
              Everything
            </Typography>
            <Typography
              variant="body1"
              color={"grey.main"}
              sx={{ textDecoration: "none" }}
              component={Link}
              to={"/product-category/groceries"}
            >
              Groceries
            </Typography>
            <Typography
              variant="body1"
              sx={{ textDecoration: "none" }}
              color={"grey.main"}
              component={Link}
              to={"/product-category/juices"}
            >
              Juice
            </Typography>
          </Box>
        )}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={`${isMobile ? "20px" : "40px"}`}
      >
        {!isMobile && (
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"30px"}
          >
            <Typography
              variant="body1"
              sx={{ textDecoration: "none" }}
              color={"grey.main"}
              component={Link}
              to={"/about"}
            >
              About
            </Typography>
            <Typography
              variant="body1"
              sx={{ textDecoration: "none" }}
              color={"grey.main"}
              component={Link}
              to={"/everything"}
            >
              Contact
            </Typography>
          </Box>
        )}
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"30px"}
        >
          <Typography
            variant="body1"
            sx={{ textDecoration: "none" }}
            color={"grey.main"}
            component={Link}
            to={"/cart"}
          >
            <Badge badgeContent={1} color="green" sx={{ color: "white" }}>
              <LocalMallOutlinedIcon sx={{ color: "green.main" }} />
            </Badge>
          </Typography>
          <Typography
            variant="body1"
            sx={{ textDecoration: "none", height: "24px" }}
            color={"grey.main"}
            component={Link}
            to={"/everything"}
          >
            <AccountCircleOutlinedIcon />
          </Typography>
        </Box>
        {isMobile && (
          <Box
            sx={{
              height: "38px",
              bgcolor: "green.main",
              p: "7px",
              color: "white",
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </Box>
        )}
      </Box>

      {isMobile && (
        <Drawer
          anchor={"left"}
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            "&  .css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
              width: "250px",
              padding: "50px 0px",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textDecoration: "none",
              display: "block",
              p: "20px 10px",
              borderBottom: "1px solid #dddddd",
            }}
            color={"grey.main"}
            component={Link}
            to={"/everything"}
          >
            Everything
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textDecoration: "none",
              display: "block",
              p: "20px 10px",
              borderBottom: "1px solid #dddddd",
            }}
            color={"grey.main"}
            component={Link}
            to={"/everything"}
          >
            Groceries
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textDecoration: "none",
              display: "block",
              p: "20px 10px",
              borderBottom: "1px solid #dddddd",
            }}
            color={"grey.main"}
            component={Link}
            to={"/everything"}
          >
            Juice
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textDecoration: "none",
              display: "block",
              p: "20px 10px",
              borderBottom: "1px solid #dddddd",
            }}
            color={"grey.main"}
            component={Link}
            to={"/everything"}
          >
            About
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textDecoration: "none",
              display: "block",
              p: "20px 10px",
              borderBottom: "1px solid #dddddd",
            }}
            color={"grey.main"}
            component={Link}
            to={"/everything"}
          >
            Contact
          </Typography>
        </Drawer>
      )}
    </Box>
  );
};

export default Header;