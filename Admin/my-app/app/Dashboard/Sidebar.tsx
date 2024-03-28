"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/navigation";

const drawerWidth = 240;
import LogoImage from "@/app/Dashboard/images/Volun-tiir.png";

export default function SideBar() {
  const router = useRouter();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#25B4F8",
            color: "white",
            marginRight:"50%"
          },
        }}
        variant="permanent"
        anchor="left"
      >
       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
  <img src={LogoImage.src} alt="Logo" style={{ width: '190px', height: 'auto' }} /> 
</Box>
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <SpaceDashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                onClick={() => router.push("/")}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText
                primary="All Providers"
                onClick={() => router.push("/Dashboard/AllProviders")}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <AllInboxIcon />
              </ListItemIcon>
              <ListItemText
                primary="All Seekers"
                onClick={() => router.push('/Dashboard/AllSeekers')}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <StarIcon />
              </ListItemIcon>
              <ListItemText
                primary="All Opportunities"
                onClick={() => router.push('/Dashboard/AllOpportunities')}
              />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <StarIcon />
              </ListItemIcon>
              <ListItemText
                primary="All Packages"
                onClick={() => router.push('/Dashboard/AllPackages')}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#EEEFF8", p: 2 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
