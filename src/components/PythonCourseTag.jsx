import { useState } from "react";
import { Box, Typography, Button, Modal, Backdrop } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import flyingRobo from "../assets/flyingrobo.png";

export default function PythonCourseTag({ expandChapter }) {
  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Start Learning");
  const navigate = useNavigate(); // Initialize navigate function

  const handleYesClick = () => {
    setOpen(false); // Close modal
    setButtonText("Resume Learning"); // Change button text
    expandChapter(1, 1); // Expand Chapter 1 & Topic 1
    navigate("/subtopic/1/1/1"); // Navigate to a valid subtopic URL
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        marginLeft: "10px",
        marginTop: "20px",
      }}
    >
      {/* Python Course Badge */}
      <Box
        sx={{
          background: "linear-gradient(to right, #A770EF, #CF8BF3)",
          marginBottom:"3px",
          padding: "8px 18px",
          borderRadius: "20px 0 0 20px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          minWidth: "140px",
          clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        }}
        >
        <Typography variant="body2">Python Course</Typography>
      </Box>

      {/* "Start Learning" Button */}
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{
          background: "#7B61FF",
          color: "#fff",
          borderRadius: "20px",
          padding: "5px 15px",
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        {buttonText}
      </Button>

      {/* Popup Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        BackdropComponent={Backdrop}
        BackdropProps={{
          sx: { backdropFilter: "blur(5px)", backgroundColor: "rgba(0, 0, 0, 0.2)" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "450px",
            bgcolor: "white",
            borderRadius: "10px",
            boxShadow: 24,
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {/* Flying Robo Image */}
          <Box
            component="img"
            src={flyingRobo}
            alt="Flying Robo"
            sx={{
              width: "70px",
              position: "absolute",
              top: "3px",
              left: "1px",
            }}
          />

          {/* Gradient Header */}
          <Box
            sx={{
              background: "linear-gradient(to right, #2575FC, purple)",
              padding: "20px",
              borderRadius: "10px 10px 0 0",
              color: "white",
            }}
          >
            <Typography fontSize="14px">
              You're about to begin your learning journey! Dive in, explore, and
              enhance your knowledge. Let's get started!
            </Typography>
          </Box>

          {/* "Yes" Button */}
          <Box sx={{ padding: "20px" }}>
            <Button
              variant="contained"
              onClick={handleYesClick} // Navigate on click
              sx={{
                background: "#7B61FF",
                color: "#fff",
                padding: "5px 25px",
                fontSize: "14px",
                textTransform: "none",
              }}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
