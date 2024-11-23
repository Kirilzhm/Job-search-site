import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero";
import AboutUs from "./pages/About-us/About-us";
import Footer from "./pages/Footer";
import Modal from "./components/Modal/Modal";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => {
        setIsModalOpen(true);
        navigate('/modal');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        navigate(-1);
    };

    return (
        <div>
            {!isModalOpen && <Header openModal={openModal} />}
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <Hero />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default App;
