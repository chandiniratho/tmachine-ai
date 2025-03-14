import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DescriptionIcon from "@mui/icons-material/Description";

const chapters = [
  {
    id: 1,
    title: "Mathematical Expressions in Python",
    topics: [
      {
        id: 1,
        title: "Merge Two Lists",
        subtopics: [
          { id: 1, title: "Using Loops" },
          { id: 2, title: "Using + Operator" },
        ],
      },
      { id: 2, title: "Alternative Methods", subtopics: [] },
    ],
  },
  {
    id: 2,
    title: "GCD and LCM of Numbers",
    topics: [
      {
        id: 1,
        title: "Finding GCD",
        subtopics: [
          { id: 1, title: "Euclidean Algorithm" },
          { id: 2, title: "Recursion Method" },
        ],
      },
      { id: 2, title: "Finding LCM Using GCD", subtopics: [] },
    ],
  },
  {
    id: 3,
    title: "Arithmetic with Complex Numbers",
    topics: [
      { id: 1, title: "Addition & Subtraction", subtopics: [] },
      { id: 2, title: "Multiplication & Division", subtopics: [] },
    ],
  },
  {
    id: 4,
    title: "Solving Equations with Matrices",
    topics: [
      {
        id: 1,
        title: "Matrix Representation",
        subtopics: [
          { id: 1, title: "Row Echelon Form" },
          { id: 2, title: "Gaussian Elimination" },
        ],
      },
      { id: 2, title: "Using NumPy", subtopics: [] },
    ],
  },
  {
    id: 5,
    title: "Trigonometric Functions in Python",
    topics: [
      {
        id: 1,
        title: "Basic Trigonometry",
        subtopics: [
          { id: 1, title: "sin(), cos(), tan()" },
          { id: 2, title: "Inverse Functions" },
        ],
      },
      { id: 2, title: "Real-World Applications", subtopics: [] },
    ],
  },
];

const ChapterAccordion = () => {
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const toggleChapter = (id) => {
    setExpandedChapter(expandedChapter === id ? null : id);
    setExpandedTopic(null);
  };

  const toggleTopic = (id) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  return (
    <Box sx={{ width: "100%", background: "#EDEEFF", padding: "12px", borderRadius: "8px" }}>
      {/* Table Header */}
      <Box sx={{ display: "flex", alignItems: "center", padding: "8px", fontWeight: 600, fontSize: "14px", color: "#007BFF" }}>
        <Typography sx={{ width: "20%", textAlign: "center" }}>Chapter No</Typography>
        <Typography sx={{ width: "70%" }}>Chapter</Typography>
      </Box>

      {chapters.map((chapter) => (
        <Box key={chapter.id} sx={{ marginBottom: "6px" }}>
          {/* Chapter Row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              background: "white",
              padding: "6px",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          >
            <Box
              onClick={() => toggleChapter(chapter.id)}
              sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#EDEEFF",
                borderRadius: "4px",
                padding: "4px",
                fontWeight: 500,
                marginRight: "8px",
                cursor: "pointer",
              }}
            >
              <MenuBookIcon sx={{ fontSize: "16px", marginRight: "4px" }} />
              {`Chapter ${chapter.id}`}
              <IconButton size="small" sx={{ marginLeft: "4px" }}>
                {expandedChapter === chapter.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>

            <Typography sx={{ width: "70%", fontSize: "14px" }}>{chapter.title}</Typography>

            <IconButton size="small">
              <InfoOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Topics Dropdown */}
          <Collapse in={expandedChapter === chapter.id} timeout="auto" unmountOnExit>
            <Box sx={{ padding: "6px", background: "#FFFAE6", borderRadius: "6px", marginTop: "4px" }}>
              {chapter.topics.map((topic) => (
                <Box key={topic.id} sx={{ marginBottom: "6px" }}>
                  {/* Topic Row */}
                  <Box
                    onClick={() => toggleTopic(topic.id)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background: "white",
                      padding: "6px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "13px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "20%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#FFDDC1",
                        borderRadius: "4px",
                        padding: "4px",
                        fontWeight: 500,
                        marginRight: "8px",
                      }}
                    >
                      <FolderOpenIcon sx={{ fontSize: "14px", marginRight: "4px" }} />
                      {`Topic ${topic.id}`}
                      <IconButton size="small" sx={{ marginLeft: "4px" }}>
                        {expandedTopic === topic.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </IconButton>
                    </Box>

                    <Typography sx={{ width: "70%", fontSize: "13px" }}>{topic.title}</Typography>

                    <IconButton size="small">
                      <InfoOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Box>

                  {/* Subtopics Dropdown */}
                  <Collapse in={expandedTopic === topic.id} timeout="auto" unmountOnExit>
                    <Box sx={{ paddingLeft: "32px", marginTop: "4px" }}>
                      {topic.subtopics.map((subtopic) => (
                        <Box
                          key={subtopic.id}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            background: "#FFF9C4",
                            padding: "8px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            border: "1px solid #FDD835",
                          }}
                          onClick={() => navigate(`/subtopic/${chapter.id}/${topic.id}/${subtopic.id}`)}
 // Navigate on click
                        >
                          <Typography sx={{ width: "70%", fontSize: "14px" }}>{subtopic.title}</Typography>

                          <IconButton size="small">
                            <InfoOutlinedIcon fontSize="small" sx={{ color: "#FB8C00" }} />
                          </IconButton>
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              ))}
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default ChapterAccordion;
