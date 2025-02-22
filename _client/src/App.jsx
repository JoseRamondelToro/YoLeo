import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ReadingClubBanner from "./components/ReadingClubBanner/ReadingClubBanner";
import ReadingSelections from "./components/ReadingSelections/ReadingSelections";
import BookClub from "./components/BookClub/BookClub";
import OtherResources from "./components/OtherResources/OtherResources";
import AboutYoLeo from "./components/AboutYoleo/AboutYoleo";
import Footer from "./components/Footer/Footer";
import InfoPage from "./components/InfoPage/InfoPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CreateUser from "./components/CreateUser/CreateUser";
import BookDetail from "./components/BookDetail/BookDetail";
import Catalogo from "./components/Catalogo/Catalogo";

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Routes>
        {/* Ruta inicio */}
        <Route
          path="/"
          element={
            <>
              <ReadingClubBanner />{" "}
              {/* Solo se muestra en la página de inicio */}
              <ReadingSelections />
              <BookClub />
              <OtherResources />
              <AboutYoLeo />
            </>
          }
        />
        {/* Ruta infomación */}
        <Route path="/informacion" element={<InfoPage />} />{" "}
        {/* Ruta catálogo */}
        <Route path="/catalogo" element={<Catalogo />} />
        {/* Ruta login */}
        <Route path="/login" element={<LoginPage />} />{" "}
        {/* Ruta creación de usuario */}
        <Route path="/create-user" element={<CreateUser />} />{" "}
        {/* Ruta detalles del libro */}
        <Route path="/book-detail" element={<BookDetail />} />{" "}
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
