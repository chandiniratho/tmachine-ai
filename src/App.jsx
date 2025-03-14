import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccordionPage from "./pages/AccordionPage";
import LearningPage from "./pages/LearningPage";
import SubtopicPage from "./pages/SubtopicPage"; // Import SubtopicPage
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TrueFalsePage from "./pages/TrueFalsePage";
export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ display: "flex", flexGrow: 1 }}>
        <div style={{ flex: 1, paddingRight: "60px" }}>
          <Routes>
            <Route path="/" element={<AccordionPage />} />
            <Route path="/learn" element={<LearningPage />} />
            <Route path="/subtopic/:chapterId/:topicId/:subtopicId" element={<SubtopicPage />} />
            <Route path="/true-false" element={<TrueFalsePage />} />
            
          </Routes>
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
