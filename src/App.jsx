import { Routes, Route } from "react-router-dom";

import { Home, Registration, Sponsors, Team, NotFound404 } from "./Pages";

import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration/:event" element={<Registration />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
