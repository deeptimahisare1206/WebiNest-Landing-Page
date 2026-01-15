import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Agenda", href: "#agenda" },
    { name: "Speakers", href: "#speakers" },
    { name: "Register", href: "#register" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black text-lg font-medium hover:text-blue-600 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <IconButton onClick={handleMenuOpen}>
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={handleMenuClose}
                  component="a"
                  href={item.href}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
