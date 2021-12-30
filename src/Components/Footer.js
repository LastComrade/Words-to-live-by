// Destructuring GitHub, IG, and LinkedIn icon from react-icons/fa module
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Fucntional component
const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-4">
            <div className="flex flex-wrap items-right justify-between p-3 m-auto">
                <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
                    <ul className="flex mx-auto text-white text-center">
                        <li className="p-3 cursor-pointer">
                            <a href="https://github.com/LastComrade" target="blank">
                                <FaGithub />
                            </a>
                        </li>
                        <li className="p-3 cursor-pointer">
                            <a href="https://www.instagram.com/konarklohat/" target="blank">
                                <FaInstagram />
                            </a>
                        </li>
                        <li className="p-3 cursor-pointer">
                            <a href="www.linkedin.com/in/konark-lohat" target="blank">
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                    <div className="flex mx-auto text-white text-center">
                        Aman Verma © 2021
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
