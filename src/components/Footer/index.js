import "./index.css";
import twitter from "./icons/twitter.png"
import linkedin from "./icons/linkedin.png"
import discord from "./icons/discord.png"
const Footer = () => {
  return (
    <header className="mt-5 pt-5">
      <div className="footer-container">
        <div className="footer-one m-0 container-fluid row">
          <div className="col-3">
            <div  className="d-inline"><h1 style={{paddingLeft:"100px",fontSize:"45px"}} className="footer-logo pt-3">RNTD<div className="" style={{width:"10px",height:"10px",backgroundColor:"red",display:"inline-block"}}></div></h1></div>
            <div className="footer-icons mt-3">
              <a href="#/"><img src={twitter} alt="twitter"></img></a>
              <a href="#/"><img src={linkedin} alt="linkedin"></img></a>
              <a href="#/"><img src={discord} alt="discord"></img></a>
            </div>
          </div>
          <div className="col-5 row ">
            <div className="col-4 mt-2">
              <h5>Column one</h5>
              <ul className="p-0 footer-link" style={{listStyle:"none"}}>
                <li><a href="#/">Link one</a></li>
                <li><a href="#/">Link two</a></li>
                <li><a href="#/">Link three</a></li>
                <li><a href="#/">Link four</a></li>
              </ul>
            </div>
            <div className="col-4 mt-2">
              <h5>Column two</h5>
              <ul className="p-0 footer-link" style={{listStyle:"none"}}>
                <li><a href="#/">Link one</a></li>
                <li><a href="#/">Link two</a></li>
                <li><a href="#/">Link three</a></li>
                <li><a href="#/">Link four</a></li>
              </ul>
            </div>
            <div className="col-4 mt-2">
              <h5>Column three</h5>
              <ul className="p-0 footer-link" style={{listStyle:"none"}}>
                <li><a href="#/">Link one</a></li>
                <li><a href="#/">Link two</a></li>
                <li><a href="#/">Link three</a></li>
                <li><a href="#/">Link four</a></li>
              </ul>
            </div>
          </div>
          <div className="col-4 mt-2 ps-5">
            <h5 style={{fontWeight:700}}>Subscribe</h5>
            <div className="footer-search">
              <input type={"email"} placeholder="Enter Your Email"></input>
              <button>Subscribe</button>
            </div>
            <p className="mt-3" style={{fontWeight:500,fontSize:"12px"}}>By subscribing you agree to with our Privacy Policy</p>
          </div>
        </div>
        <div className="footer-two">
          <p>©2022,All right reserved.</p>
          <div>
            <a href="#/">Privacy Policy</a>
            <a href="#/">Terms of Service</a>
            <a href="#/">Cookies settings</a>
          </div>
          
          
        </div>
      </div>
    </header>
  );
};

export default Footer;
