import Button from "../Button/Button";
import { IoLogoFacebook } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-darkBlue">
      <div className="mx-auto w-4/5 flex justify-between">
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold">Company</h3>
          <a href="">Blog</a>
          <a href="">Pricing Support</a>
          <a href="">Contact</a>
          <a href="">About</a>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold">Features</h3>
          <a href="">Restaurant</a>
          <a href="">On Demand Services</a>
          <a href="">Property Rental</a>
          <a href="">Ecommerce</a>
          <a href="">Caribbean Region</a>
          <a href="">Ewallet</a>
          <a href="">Egift</a>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold">Links</h3>
          <a href="">Privacy</a>
          <a href="">Licenses</a>
          <a href="">Terms</a>
        </div>
        <div className="flex-flex-col">
          <p>Sign up to get the latest releases and freebies!</p>
          <p>
            Less than 2 emails per month - only the good stuff. We hate spam
            too.
          </p>
          <input type="email" placeholder="Enter your email" />
          <Button />
        </div>
        <div className="flex-space-y-2">
          <h3 className="font-semibold">Contact Us:</h3>
          <p>
            Have questions or suggestions? We'd love to hear from you! Contact
            our dedicated support team at
          </p>
          <div className="flex">
            <IoLogoFacebook />
            <IoMdMail />
            <FaLinkedin />
            <FaSquarePhone />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
