import "./index.css";
import Search from "../Search";
const Header = () => {
  return (
    <header className="header-container">
      <div className="row container-fluid">
        <div  className="col-3 p-0"><h1 style={{paddingLeft:"100px"}} className="header-logo pt-5">RNTD<div className="" style={{width:"15px",height:"15px",backgroundColor:"red",display:"inline-block"}}></div></h1></div>
        <div className="col-4 p-0 header-search">
          <Search/>
        </div>
        <div className="col-5 p-0 header-contact">
          <ul>
            <li>EXPLORE</li>
            <li>LEARN</li>
           
          </ul>
          <div>
            <span className="material-symbols-outlined">notifications</span>
            <span className="material-symbols-outlined">person</span>
            <span className="material-symbols-outlined">book</span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
