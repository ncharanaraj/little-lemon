import "../src/App.css"
import {Routes, Route} from "react-router-dom"
import HomePage from "./components/HomePage"
import BookingPage from "./components/BookingPage"
import Nav from "./components/Nav"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="booking-page" element={<BookingPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
