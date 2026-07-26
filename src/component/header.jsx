import "../App.css";
import varzesh3 from "../assets/varzesh3.svg";
function Header() {
  return (
    <div className="headr">
          <div className="sidebar-header">
      <div className="list">
        <li>پیش بینی</li> 
    <li>اپلیکیشن ورزش سه</li>  
    <li>پخش زنده</li>
    <li>اخبار ورزشی</li>
    <li>پادکست</li>
    <li>تماس با ما</li>
    <li>تبلیغات </li>
    <li>سوژه های شما</li>
      </div>
    <div className="log">
      <button className="button-header">تاریخ</button>
      <button className="button-header">جستجو</button>
      <button className="button-header">ورود</button>
    </div>
     </div>
     <div className="bottom-header">

     <img src={varzesh3} />

     <li>صفخه اصلی</li>
     <li>برنامه برجام</li>
     <li>جدول لیگ برتر</li>
     <li>ویدیو</li>
     <li>روزنامه</li>
     <li>نقل و انتقالات</li>
     <li>جام جهانی</li>
     <li>گزارش تصویری</li>
     <li>نتایج زنده</li>
    </div>
    </div>
  );
}

export default Header;