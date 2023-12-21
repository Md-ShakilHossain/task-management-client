import logo from "../../../public/logo.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0">
          <p className="text-lg font-semibold">Connect with us on social media:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="https://www.facebook.com/shakil.bsb/"
              className="hover:text-gray-400"
            >
              <FaFacebook className="text-4xl"></FaFacebook>
            </a>
            <a
              href="https://www.linkedin.com/in/md-shakil-hossain-ba55a82a0/"
              className="hover:text-gray-400"
            >
             <FaLinkedin className="text-4xl"></FaLinkedin>
            </a>
            <a
              href="https://github.com/Md-ShakilHossain"
              className="hover:text-gray-400"
            >
              <FaGithub className="text-4xl"></FaGithub>
            </a>
          </div>
        </div>
        <div className="border-l border-white h-16 mx-4 hidden lg:block"></div>
        <div className="mb-4 lg:mb-0">
          
          <img
            src={logo}
            alt="Company Logo"
            className="h-20 w-52 rounded-full"
          />
        </div>
       
      </div>
      <div className="text-center mt-5">
          <p className="text-sm">All rights reserved by Md. Shakil Hossain &copy; 2023.</p>
        </div>
    </footer>
  );
};

export default Footer;
