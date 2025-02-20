"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MenuIcon from "@mui/icons-material/Menu";

const CodeCard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className="relative border border-black rounded-[30px] shadow-md p-4 w-80 bg-white overflow-hidden">
      <div className="absolute top-2 right-2 cursor-pointer">
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <CardContent>
        <div className=" text-lg font-semibold text-black">Title</div>

        <p className="text-gray-600 text-sm">Coding Language/framework</p>
        <p className="mt-2 font-bold text-sm">Tech Stack Used</p>
        <p className="text-gray-500 text-sm">Tech Stack Icons</p>
        <div className="mt-4">
          <Button
            className="rounded-[30px] bg-yellow-500"
            variant="contained"
            startIcon={<PlayArrowIcon />}
          >
            Copy Code
          </Button>
        </div>
      </CardContent>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Card>
  );
};

export default CodeCard;
