import "./index.css";
import ethereum from "./icons/ethereum.png"
const Card = ({ title, price }) => {
    return (
      <div style={{display:"inline-block"}}>
        <div className="card-style">
          <div className="card-main">
          </div>
          <h3>{title && title}</h3>
          <div className="card-footer">
            <div>
              <img src={ethereum} alt="etherium"></img>
            </div>
            <p>{price && price}
            </p>

          </div>
        </div>
      </div>
    );
  };
  
  export default Card;