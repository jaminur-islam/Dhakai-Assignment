import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Outlet, useNavigate } from "react-router";
import { Badge, MenuItem } from "@mui/material";
import notification from "../../img/appbar-logo-img/notification.webp";
import messenger from "../../img/appbar-logo-img/messenger.png";
import appBarLogo from "../../img/appbar-logo-img/appBar-logo.png";
import searchIcon from "../../img/appbar-logo-img/searchBox.svg";
import logo from "../../img/sideBar-img/logo.svg";
import home from "../../img/sideBar-img/home.svg";
import search from "../../img/sideBar-img/search.svg";
import bug from "../../img/sideBar-img/bug.svg";
import shirt from "../../img/sideBar-img/shirt.svg";
import ball from "../../img/sideBar-img/ball.svg";
import shop from "../../img/sideBar-img/shop.svg";
import footerArrow from "../../img/sideBar-footer-img/arrow.svg";
import setting from "../../img/sideBar-footer-img/setting.svg";
import question from "../../img/sideBar-footer-img/question.svg";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

//============================== Use Style on makeStyle =======================================//
const useStyle = makeStyles({
  switchButtonBox: {
    width: "170px",
    height: "40px",
    borderRadius: "100px",
    padding: "3px",
    boxShadow: " 0 2px 0 0 #009d79, inset 0 2px 0 0 #006c53",
    backgroundColor: "#00775c",
    display: "flex",
    alignItems: "center",
    justifyDontent: "space-between",

    "& button": {
      width: "80px",
      alignSelf: "stretch",
      backgroundColor: " transparent",
      border: "none",
      borderRadius: " 100px",
      fontSize: " 14px",
      fontWeight: "bold",
      color: "#f2f2f2",
      cursor: "pointer",
    },
  },

  buttonSelected: {
    boxShadow: "0 2px 0 0 #006c53, inset 0 2px 0 0 #009d79",
    backgroundColor: "#009372",
  },

  searchBox: {
    minWidth: "408px",

    borderRadius: "100px",
    backgroundColor: "#fff",
    padding: "12px 15px",
    display: "flex",
    alignItems: "center",
    "@media(max-width: 780px)": {
      minWidth: "100%",
    },
    "& input": {
      flex: 1,
      height: "16px",
      border: "none",
      marginLeft: "10px",
      fontFamily: " SFUIDisplay",
      fontSize: "16px",
      fontWeight: 500,
      textAlign: "left",
      color: "#9797a0",

      "&::placeholder": {
        fontFamily: "SFUIDisplay",
        fontSize: " 16px",
        fontWeight: 500,
        textAlign: "left",
        color: "#9797a0",
      },
      "&:focus": {
        outline: "none",
      },
    },
  },
});

const drawerWidth = 85;
//============================== Dashboard component ===========================================//
function Dashboard(props) {
  const classes = useStyle();
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  //============================== Handle mobaile manu=============================================//
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  // ================================= Render Mobaile manu ==========================================//
  const renderMobileMenu = (
    <Menu
      sx={{
        display: { md: "none", xs: "block" },
        marginTop: "42px",
        marginLeft: "16px",

        "& ul": {
          padding: "20px 5px",
          background: "#24886A",
          border: "5px solid #24886A",
        },
      }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box className={classes.searchBox}>
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="Search by name, group, type.." />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
          alignItems: "center",
        }}
      >
        <Badge onClick={handleMenuClose} badgeContent={4} color="error">
          <img src={messenger} alt="" />
        </Badge>
        <Badge onClick={handleMenuClose} badgeContent={17} color="error">
          <img src={notification} alt="" />
        </Badge>
        <MenuItem
          onClick={handleMenuClose}
          sx={{ height: "50px", marginTop: "3.5px" }}
        >
          <img width={70} src={appBarLogo} alt="" />
        </MenuItem>
      </Box>
    </Menu>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [select, setSelect] = React.useState(true);
  const handleSelectButton = () => {
    setSelect(!select);
  };

  // ================================= SideBar drawer==========================================//
  const drawer = (
    <div>
      <Box sx={{ padding: "5px", marginLeft: "15px", marginTop: "15px" }}>
        <img width="45px" src={logo} alt="" />
      </Box>
      <List
        sx={{
          paddingLeft: "5px",
          marginTop: "10px",
          "& img": {
            width: "35px",
          },
        }}
      >
        <ListItem>
          <img src={home} alt="home" />
        </ListItem>
        <ListItem>
          <img src={search} alt="search" />
        </ListItem>
        <ListItem>
          <img src={bug} alt="bug" />
        </ListItem>
        <ListItem>
          <img src={shirt} alt="shirt" />
        </ListItem>
        <ListItem>
          <img src={ball} alt="ball" />
        </ListItem>
        <ListItem>
          <img src={shop} alt="shop" />
        </ListItem>

        <List
          sx={{
            marginTop: "100px",
            "& img": {
              width: "30px",
            },
          }}
        >
          <ListItem>
            <img src={setting} alt="footerArrow" />
          </ListItem>
          <ListItem>
            <img src={question} alt="roundArrow" />
          </ListItem>
          <ListItem
            onClick={() => {
              localStorage.clear("token");
              navigate("/login");
            }}
          >
            <Link to="/login">
              <img src={footerArrow} alt="roundArrow" />
            </Link>
          </ListItem>
        </List>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: "#24886A",
          padding: "8px 0",
          boxShadow: "none",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ fontSize: "32px" }} />
          </IconButton>
          <Box className={classes.switchButtonBox}>
            <button
              onClick={handleSelectButton}
              className={select === true ? classes.buttonSelected : ""}
            >
              Explore
            </button>
            <button
              onClick={handleSelectButton}
              className={select === false ? classes.buttonSelected : ""}
            >
              Activity
            </button>
          </Box>
          <Box
            sx={{ display: { md: "flex", xs: "none" } }}
            className={classes.searchBox}
          >
            <img src={searchIcon} alt="" />
            <input
              type="text"
              placeholder="Search by name, group, type and others"
            />
          </Box>
          <MoreVertIcon
            sx={{ fontSize: "30px", display: { md: "none", xs: "block" } }}
            onClick={handleMobileMenuOpen}
          />
          <Box
            sx={{ display: { md: "flex", xs: "none" }, alignItems: "center" }}
          >
            <MenuItem>
              <Badge badgeContent={4} color="error">
                <img src={messenger} alt="" />
              </Badge>
            </MenuItem>
            <MenuItem>
              <Badge badgeContent={17} color="error">
                <img src={notification} alt="" />
              </Badge>
            </MenuItem>
            <MenuItem sx={{ height: "50px" }}>
              <img src={appBarLogo} alt="" />
            </MenuItem>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* ======================== All nested routers will show up here===================== */}
        <Outlet />
      </Box>
      {renderMobileMenu}
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
