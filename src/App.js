import NavbarComp from "./components/Navbar";
import HeroComp from "./components/Pengertian";
import Install from "./components/Install";
import Footer from "./components/Footer";


const App = () => {
    return (
        <div>
            <NavbarComp />
            <HeroComp />
            <Install />
            <Footer />
        </div>
    )
}

export default App;