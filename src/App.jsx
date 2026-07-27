import "./App.css";
import Header from "./component/Header";
import photo from "./assets/photo.webp";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.gif";
import photo3 from "./assets/photo3.webp";
import photo4 from "./assets/photo4.gif";
import photo5 from "./assets/photo5.gif";
import photo6 from "./assets/photo6.gif";
import photo7 from "./assets/photo7.gif";
import photo8 from "./assets/photo8.gif";
function App() {
  return (
    <div className="varzesh">
      <Header />
        <div className="page-home">
          <div className="slider">
            <img style={{
              borderRadius:"12px"
            }} src={photo} />

            <div>
            <h2 className="pic1">لحظه به لحظه با نقل و انتقالات فوتبال ایران</h2>
            <p className="pic2">
              موثق ترین اخبار مربوط به جابجایی های فوتبال ایران را در این ستون اختصاصی بخوانید.
            </p>
            </div>
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


              <div>
            <h2 className="pic1">قطعی شد: رئال ستاره بوندسلیگا را خرید</h2>
            <p className="pic2">
              نتقال یان دیومانده از لایپزیش به رئال مادرید در مراحل نهایی قرار دارد و به‌زودی به صورت رسمی اعلام خواهد شد.
            </p>
            </div>
            </div>


            <img style={{borderRadius:"12px", width:"200px" ,height:"300px"}} src={photo4}/>
            <img style={{borderRadius:"12px"}} src={photo5}/>
          </div>
          
        <div className="section3">
            <div className="mini-slider2">
            <img style={{borderRadius:"12px"}} src={photo6}/>
            <img style={{borderRadius:"12px"}} src={photo7}/>
            <img style={{borderRadius:"12px"}} src={photo8}/>
              </div>
              </div>
    </div>
  );
}

export default App;