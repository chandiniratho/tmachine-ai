import { Container } from "@mui/material";
import PythonCourseTag from "../components/PythonCourseTag";
import AccordionComponent from "../components/AccordionComponent";

export default function AccordionPage() {
  return (
    <Container sx={{ marginTop: 3 }}>
      <PythonCourseTag />
      <AccordionComponent />
    </Container>
  );
}