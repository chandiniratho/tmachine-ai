import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NightlightIcon from "@mui/icons-material/Nightlight";
import FolderIcon from "@mui/icons-material/Folder";
import PhoneIcon from "@mui/icons-material/Phone";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

// Import the logo from assets
import logo from "../assets/tmachinelogo.png"; 

export default function Navbar() {
  return (
    <AppBar 
      position="static" 
      sx={{ background: "#fff", boxShadow: "none", borderBottom: "1px solid #ddd", padding: "5px 20px" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Logo (Now on the Left) with Correct Width & Height */}
        <img 
          src={logo} 
          alt="Tmachine.ai" 
          style={{ width: "150px", height: "100px", objectFit: "contain" }}
        />

        {/* Icons (Now on the Right) */}
        <Box>
          <IconButton><NightlightIcon sx={{ color: "#555" }} /></IconButton>
          <IconButton><HomeIcon sx={{ color: "#555" }} /></IconButton>
          <IconButton><FolderIcon sx={{ color: "#555" }} /></IconButton>
          <IconButton><PhoneIcon sx={{ color: "#555" }} /></IconButton>
          <IconButton><PowerSettingsNewIcon sx={{ color: "red" }} /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
