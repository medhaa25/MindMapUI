// In App.js
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // Reset CSS
import "./App.css";
import Nav from "./components/Navigation/nav";
import Header from "./components/Header/Header";
import MindMap from "./components/Mindmap/MindMap";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif", // Set Poppins font globally
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures that MUI styles are applied globally */}
      <Nav />
      <section className="content">
        <Header />
        <MindMap />
      </section>
    </ThemeProvider>
  );
}

export default App;
