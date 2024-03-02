import logo from "../Asests/wahglogo.png";

export default function Footerr() {
  return (
    <footer>
      <div className="footer  d-flex flex-column  align-items-center   p-4 ">
        <div className="row d-flex  w-100 ">
          <div className="col-md-6 d-flex    ">
            <div className="text-center d-flex  justify-content-center align-items-center ">
              <img src={logo} className="img-footer " />
              <h3 className="logo-foot">وهج</h3>
            </div>
          </div>
          <div className="col-md-6 d-flex ">
            <div className="col-md-3">
              <ul>
                <li>FOLLOW US</li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li>ABOUT</li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li>LEGAL</li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row d-flex  w-100  ps-5 ">
          <div className="col-md-6  copy-w d-flex  ps-5 col-sm pb-3 ">
            © 2024
            <span>
              <a href="#">DoBA</a>
            </span>
          </div>
          <div className="col-md-6  footer-icons  gap-3 d-flex ">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
