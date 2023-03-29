import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Characters } from "./pages/Characters";
import { Episodes } from "./pages/Episodes";
import { Home } from "./pages/Home";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}
