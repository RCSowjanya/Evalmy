import React from "react";
import logo from "../Images/evalmybrand.png";
import facebook from "../Images/facebook-logo.png";
import linkedin from "../Images/linkedin-logo.png";
import youtube from "../Images/youtube-logo.png";
import instagram from "../Images/social-insta-logo.png";
import twitter from "../Images/social-twitter-logo.png";
import socialfooter from "../Images/footer-social.png";
const Footer = () => {
  return (
    <div className="bg-black">
      <img
        src={socialfooter}
        className="footer-social py-[4%]"
        alt="social-footer"
      />
      <div className="grid grid-cols-4 gap-3 max-[600px]:grid-cols-1 px-4 py-[5%]">
        <div className="max-[600px]:text-center">
          <img
            src={logo}
            alt="brand-logo"
            className="ml-[-3%] max-[600px]:ml-0"
          />
          <p className="text-white py-[6%] leading-6">
            Our mission is to empower you with the knowledge and tools you need
            to navigate the rapidly changing landscape of social media and
            customer experience.
          </p>
          <div className="flex gap-4 max-[600px]:justify-center">
            <img className="w-7 h-7" src={facebook} alt="facebook-logo" />
            <img className="w-7 h-7" src={instagram} alt="instagram-logo" />
            <img className="w-7 h-7" src={twitter} alt="twitter-logo" />
            <img className="w-7 h-7" src={youtube} alt="youtube-logo" />
            <img className="w-7 h-7" src={linkedin} alt="linkedin-logo" />
          </div>
        </div>
        <div className="text-white text-center max-[600px]:mt-[2%]">
          <h2 className="text-3xl font-extrabold mb-[4%]">Company</h2>
          <p className="mt-5">About evalmyBrand</p>
          <p className="mt-5">Contact Us</p>
          <p className="mt-5">Customers</p>
        </div>
        <div className="text-white text-center max-[600px]:mt-[2%]">
          <h2 className="text-3xl font-extrabold mb-[4%]">Products</h2>
          <p className="mt-5">Insight & Analysis</p>
          <p className="mt-5">Engagement</p>
          <p className="mt-5">Sentiment Analysis</p>
          <p className="mt-5">competitor Analysis</p>
          <p className="mt-5">Brand Goal Attainment</p>
          <p className="mt-5">Case Management</p>
        </div>
        <div className="text-white text-center max-[600px]:mt-[2%]">
          <h2 className="text-3xl font-extrabold mb-[4%]">
            Registered Address
          </h2>
          <p className="mt-3">10th floor, Sanali Spazio,</p>
          <p className="mt-3">Madhapur, Hyderabad – 500081</p>
          <p className="mt-3">Telangana, INDIA.</p>
        </div>
      </div>
      <hr />
      <div className="flex text-white justify-center gap-4 py-[4%]">
        <p>Terms of Use</p>
        <p>Cookies Setting</p>
        <p>Privacy policy</p>
        <p>Intellectual Property</p>
      </div>
    </div>
  );
};

export default Footer;
