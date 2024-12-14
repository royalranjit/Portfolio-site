import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Logo.png"

const handleFB = () => {
    window.open("https://www.facebook.com/ranjitchaudhary.5209","_blank" );
};
const handleGH = () => {
    window.open("https://github.com/royalranjit","_blank" );
};
const handleLI = () => {
    window.open("https://www.linkedin.com/in/ranjitchaudhary/","_blank" );
};

const Navbar =()=>{
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <button onClick={handleLI}><FaLinkedin /></button>
        <button onClick={handleGH}><FaGithubSquare /></button>
        <button onClick={handleFB}><FaFacebook /></button>
        </div>
    </nav>;   

}
export default Navbar;