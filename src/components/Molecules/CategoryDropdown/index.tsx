import { Menu } from "@mui/material";
import React from "react";
import { ICategoryDropdown } from "./ICategoryDropdown.types";
import MenuItem from "@/components/__Shared/MenuItem";

const options = [
  "None",
  "Men",
  "Woman",
  "Shoes",
  "Jeans",
  "T-shirts",
  "Tops",
  "Electronics",
  "Slippers",
  "Books",
  "Agriculture",
  "Medicine",
  "Drinks",
  "Grocery",
];

const CategoryDropdownList = ({
  openCategory,
  anchorEl,
  handleCloseMenu,
}: ICategoryDropdown) => {
  return (
    <div>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={openCategory}
        onClose={handleCloseMenu}
        onClick={() => handleCloseMenu()}
        PaperProps={{
          style: {
            maxHeight: 50 * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleCloseMenu}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CategoryDropdownList;
