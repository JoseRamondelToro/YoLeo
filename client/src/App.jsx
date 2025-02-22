import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoanProvider } from "./LoanContext";
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
import Account from "./components/InfoCuenta/Account";

const App = () => (
  <LoanProvider>
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ReadingClubBanner />
                <ReadingSelections />
                <BookClub />
                <OtherResources />
                <AboutYoLeo />
              </>
            }
          />
          <Route path="/informacion" element={<InfoPage />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/book-detail/:id" element={<BookDetail />} />
          <Route path="/info-account/*" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </LoanProvider>
);

export default App;
