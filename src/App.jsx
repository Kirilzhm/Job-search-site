import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/About-us/About-us"
import Footer from "./components/Footer/Footer";
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
