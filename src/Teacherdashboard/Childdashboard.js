import * as React from "react";
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  //   ListItemText,
  ListSubheader,
} from "@mui/material";

import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
// import Subjects  from "./Subjects"

const Childdashboard = () => {
  // const location = useLocation();
  return (
    <>
      <React.Fragment>
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>

          {/* <ListItemText primary="Home" /> */}
          <Link to="/Home" style={{ textDecoration: "none", color: "Black" }}>
            Home
          </Link>
        </ListItemButton>
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <Link
            to="/Yourcourses"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Your Courses
          </Link>

          {/* <ListItemText primary="Subjects" /> */}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ClassOutlinedIcon />
          </ListItemIcon>

          <Link
            to="/Addcourses"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Add Courses
          </Link>

          {/* <ListItemText primary="Attendance" /> */}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AnnouncementOutlinedIcon />
          </ListItemIcon>

          <Link
            to="/Complain"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Check Complain
          </Link>

          {/* <ListItemText primary="Complain" /> */}
        </ListItemButton>
      </React.Fragment>
      <Divider sx={{ my: 1 }} />
      <React.Fragment>
        <ListSubheader component="div" inset>
          User
        </ListSubheader>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>

          <Link
            to="/Profile"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Profile
          </Link>

          {/* <ListItemText primary="Profile" /> */}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>

          <Link to="/Logout" style={{ textDecoration: "none", color: "Black" }}>
            Logout
          </Link>

          {/* <ListItemText primary="Logout" /> */}
        </ListItemButton>
      </React.Fragment>
    </>
  );
};

export default Childdashboard;
