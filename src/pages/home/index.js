import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";
import Search from "../../components/Search";
import Card from "../../components/Card";
import data from "../../data.json";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid p-0">
        <div className="home-background">
          <div></div>
        </div>
      </div>
      <div className="home-content container mt-5 pt-5">
        <h1>Decendraland</h1>
        <h5 className="mt-4">By Eodcl</h5>
        <p className="mt-4 w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus porro cupiditate numquam, temporibus minima quae nihil, incidunt perspiciatis nemo totam eaque delectus exercitationem in rem quia modi aliquam? Sed. incidunt perspiciatis nemo totam eaque delectus exercitationem in rem quia modi aliquam?</p>
      </div>
      <div className="main-card container">
        <div className="main-top">
          <p className="p-0 m-0 bold">ITEMS</p>
          <p className="p-0 m-0 ms-5 ps-5 mdbold">ACTIVITY</p>
        </div>
        <div className="row w-100">
          <div style={{borderRight:"1px solid black",height:"1200px"}} className="col-3">
            <div className="mt-5">
              <div>
                <p className="mdbold d-inline">STATUS</p>
                <span style={{float:"right"}} className="material-symbols-outlined me-5">change_history</span>
              </div>
              <div className="mt-2">
                <p className="d-inline">AVAILABLE</p>
                <span style={{float:"right"}} className="material-symbols-outlined me-5">check_box_outline_blank</span>
              </div>
              <div className="mt-2">
                <p className="d-inline">LISTED</p>
                <span style={{float:"right"}} className="material-symbols-outlined me-5">check_box_outline_blank</span>
              </div>
              <div className="mt-2">
                <p className="d-inline">RENTED</p>
                <span style={{float:"right"}} className="material-symbols-outlined me-5">check_box_outline_blank</span>
              </div>
            </div>
            <div style={{opacity:"0.3"}} className="mt-5">
              <div>
                <p className="mdbold d-inline">CURRENCY</p>
                <span style={{float:"right"}} className="material-symbols-outlined me-5">change_history</span>
              </div>
              <div className="mt-2">
                <p className="d-inline">ETH</p>
                <span style={{float:"right"}} className="material-symbols-outlined me-5">check_box_outline_blank</span>
              </div>
              <div className="mt-2">
                <p className="d-inline">WETH</p>
                <span style={{float:"right"}} className="material-symbols-outlined me-5">check_box_outline_blank</span>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div style={{marginTop:"20px"}} className="p-0 card-search col-9">
              <Search/>
            </div>
            <div className="search-two" style={{float:"right",position:"absolute",left:"80%",top:"154%"}}>
              <span className="material-symbols-outlined">drag_handle</span>
            </div>
            {/* ----------card----------------- */}
            <div className="row">
              {data && data.map(item => {
                return <div className="col-4" key={item.id}>
                  <Link to="/collection">
                    <Card title={item.title} price={item.price}/>
                  </Link>
                </div>
              })}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Home;
