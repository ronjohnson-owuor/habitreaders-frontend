import { Link } from "@remix-run/react";
import React from "react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="my-10 relative w-full min-h-[200px] bg-customForeground-light mb-0  dark:bg-customForeground-dark text-customText-light dark:text-customText-dark grid grid-cols-3 gap-4 place-content-center p-4">
      <div>
        <h3 className="text-md text-customMaincolors-primary font-bold">
          follow us on social media
        </h3>
        <div className="flex  gap-4 text-[40px] mt-4">
          <div>
            <Link to=""><FaFacebookF /></Link>
          </div>
          <div>
          <Link to=""><RiInstagramFill /></Link>
          </div>
          <div>
          <Link to=""><FaTiktok /></Link>
          </div>
          <div>
          <Link to=""><FaXTwitter /></Link>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-md text-customMaincolors-primary font-bold">
          useful links
        </h3>
        <ul className="text-sm dark:text-gray-400 leading-8 italic">
          <Link to="/">
            <li>privacy policy</li>
          </Link>
          <Link to="/">
            <li>terms and conditions</li>
          </Link>
          <li>&copy;2025,habitreaders,zeron Labs</li>
        </ul>
      </div>
      <div>
        <h3 className="text-md text-customMaincolors-primary font-bold">
          web links
        </h3>
        <ul className="text-sm dark:text-gray-400 leading-8 italic">
          <Link to="/">
            <li>back home</li>
          </Link>
          <Link to="/">
            <li>contact us</li>
          </Link>
          <Link to="/">
            <li>about us</li>
          </Link>
          <Link to="/">
            <li className="underline">create account</li>
          </Link>
          <Link to="/">
            <li>log in</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
