import "./App.css";
import Header from "./component/Header";
import photo from "./assets/photo.webp";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.gif";
import photo3 from "./assets/photo3.webp";
function App() {
  return (
    <div className="varzesh">
      <Header />
        <div className="page-home">
          <div className="slider">
            <img style={{
              borderRadius:"12px"
            }} src={photo} />
            <p style={{paddingLeft:"6px",paddingRight:"6px"}}>asdsadasasedatgdvujhg,mbgfkjmthjl</p>
          </div>
          <img style={{
              borderRadius:"12px"
            }} src={photo1} />
          <img style={{
              borderRadius:"12px"
            }} src={photo2} />
          </div>
          <div className="section2">
            <div className="mini-slider">
              <img style={{
                borderRadius:"12px"
              }} src={photo3}/>
              <p style={{
                paddingLeft:"6px", paddingRight:"6px"
              }}>dfghjkld</p>
            </div>
            <img style={{borderRadius:"12px"}} src={photo1}/>
            <img style={{borderRadius:"12px"}} src={photo2}/>
          </div>

    </div>
  );
}

export default App;