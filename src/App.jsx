import Header from "./pages/Header/Header"
import Hero from "./pages/Hero"
import AboutUs from "./pages/About-us/About-us"
import Footer from "./pages/Footer"
import Modal from "./components/Modal/Modal"
import { Routes, Route } from "react-router-dom"
import { useLocation } from "react-router-dom"

function App() {
    const location = useLocation();

    return(
        <div>
                {location.pathname !== "/modal" && <Header />}
                <Routes>
                    <Route path="/modal" element={<Modal />} />
                </Routes>
                <Hero/>
                <AboutUs/>
                <Footer/>
        </div>
    )
}
  
export default App
