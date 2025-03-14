import { Box, IconButton, Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import NoteIcon from "@mui/icons-material/Note";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
export default function Sidebar() {
  const navigate = useNavigate(); // Initialize navigate

  const handleRedirect = () => {
    navigate(`/subtopic/${chapter.id}/${topic.id}/${subtopic.id}`); // Redirect to Chapter 1, Topic 1, Subtopic 1
  };
  return (
    <Box
      sx={{
        position: "fixed",
        right: "4px",
        top: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        background: "#fff",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <IconButton onClick={handleRedirect}> {/* Trigger progress */}
          <BarChartIcon sx={{ color: "#555" }} />
        </IconButton>
        <Typography sx={{ fontSize: "10px", color: "#555" }}>Progress</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <IconButton onClick={handleRedirect}>
          <TimelineIcon sx={{ color: "#555" }} />
        </IconButton>
        <Typography sx={{ fontSize: "10px", color: "#555" }}>Statistics</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <IconButton onClick={handleRedirect}>
          <NoteIcon sx={{ color: "#555" }} />
        </IconButton>
        <Typography sx={{ fontSize: "10px", color: "#555" }}>Notes</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <IconButton onClick={handleRedirect}>
          <StarIcon sx={{ color: "#555" }} />
        </IconButton>
        <Typography sx={{ fontSize: "10px", color: "#555" }}>Highlights</Typography>
      </Box>
    </Box>
  );
}
